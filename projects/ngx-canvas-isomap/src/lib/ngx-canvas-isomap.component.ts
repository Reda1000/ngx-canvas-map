import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

import { CanvasConfig } from './models/canvas-config.interface';
import { CanvasLayer, CanvasShadowLayer } from './models/canvas-layer.interface';
import { CanvasSettings } from './models/canvas-settings.interface';
import { Map, Tile } from './models/map.interface';
import { NgxCanvasIsomapService } from './ngx-canvas-isomap.service';

const profile: CanvasConfig = {
  quality: 1,
  zoomStepTap: 0.5,
  zoomStepScrollDebouncer: 100,
  maxZoom: 6,
  maxSize: 16000,
  maxOffset: 300,
  topOffset: 0.58375,
  topOffsetCenterCalcModification: true,
  refresh: 'automatic',
  style: {
    map: {
      backgroundColor: 'grey',
      borderColor: 'lightgrey',
      borderWidth: 0
    },
    tile: {
      backgroundColor: 'white',
      borderColor: 'darkgrey',
      borderWidth: 1,
      fontSize: 0.26739,
      fontFamily: 'Arial',
      fontColor: 'black',
      textAlign: 'center'
    },
    selectedTile: {
      backgroundColor: 'yellow',
      borderColor: 'grey',
      borderWidth: 2,
      fontSize: 0.26739,
      fontFamily: 'Arial',
      fontColor: 'black',
      textAlign: 'center'
    }
  },
  cheat: {
    imgTileHeightAdjustment: -21,
    imgTileHeightOffsetAdjustment: 0.58375
  }
};

@Component({
  selector: 'lib-ngx-canvas-isomap',
  template: `
    <!--div
      style="position: absolute; background: lightgrey; width: 1000px; bottom: 0"
    >
      {{ cvs.set | json }} <br />
      {{ shadowMap.shadow.set | json }} <br />
    </div-->
    <canvas #cnvs></canvas>
    <!--canvas #shadow></canvas>
    <canvas #shadowText></canvas>
    <canvas #shadowBackground></canvas-->
  `,
  styles: [
    ':host {display: block;width: 100%; height: 100%;}',
    'canvas {width: 100%; height: 100%}'
  ]
})
export class NgxCanvasIsomapComponent implements OnInit {
  public _config: CanvasConfig = profile;

  private _map: Map<any> = {
    size: [1, 1],
    tiles: []
  };

  private cvs: CanvasLayer = {
    el: undefined,
    config: this._config,
    set: {
      offset: [0, 0, 0, 0],
      border: [0, 0, 0, 0],
      scale: 1,
      parentSize: [400, 400],
      tileSize: [0, 0]
    },
    map: this._map
  };

  public settingS: CanvasSettings = {
    offset: [0, 0, 0, 0],
    border: [0, 0, 0, 0],
    scale: 6,
    parentSize: [0, 0],
    tileSize: [0, 0]
  };

  private shadowMap: { [key: string]: CanvasShadowLayer } = {
    shadow: {
      el: document.createElement('canvas'),
      config: this._config,
      map: this._map,
      set: this.settingS,
      drawAction: 'IMAGES'
    },
    shadowText: {
      el: document.createElement('canvas'),
      config: this._config,
      map: this._map,
      set: this.settingS,
      drawAction: 'TEXT'
    },
    shadowBackground: {
      el: document.createElement('canvas'),
      config: this._config,
      map: this._map,
      set: this.settingS,
      drawAction: 'BACKGROUND'
    }
  };

  @ViewChild('cnvs')
  set bind(el: ElementRef /*| Event*/) {
//    console.debug('cnvs found');
    this.initCanvas(this.cvs, el);
//    console.debug('cnvs loaded');
    this.svc.zoom2(0, 0, 0, this.cvs);
  }

  @ViewChild('shadow')
  set bindShadow(el: ElementRef /* | Event*/) {
//    console.debug('shadow found');
    this.initCanvas(this.shadowMap.shadow, el, [...this.cvs.set.parentSize]);
//    console.debug('shadow loaded');
  }

  @ViewChild('shadowText')
  set bindShadowText(el: ElementRef /*| Event*/) {
//    console.debug('shadowText found');
    this.initCanvas(this.shadowMap.shadowText, el, [
      ...this.cvs.set.parentSize
    ]);
//    console.debug('shadowText loaded');
  }

  @ViewChild('shadowBackground')
  set bindShadowBackground(el: ElementRef /*| Event*/) {
//    console.debug('shadowBackground found');
    this.initCanvas(this.shadowMap.shadowBackground, el, [
      ...this.cvs.set.parentSize
    ]);
//    console.debug('shadowBackground loaded');
  }

  @Input() set mark(id: string) {
    this.svc.drawBackgroundLayer2(this.shadowMap.shadowBackground, [id]);
    this.rerender();
  }

  @Output() selected: EventEmitter<any> = new EventEmitter();

  @Input() public set config(newConfigRoot: CanvasConfig) {
//    console.debug('config update');
    const copyMap = (
      newConfigBranch: { [key: string]: any },
      config: { [key: string]: any }
    ) => {
      for (const item of Object.keys(newConfigBranch)) {
        if (newConfigBranch[item] instanceof Object) {
          copyMap(newConfigBranch[item], config[item]);
        } else {
          config[item] = newConfigBranch[item];
        }
      }
    };
    copyMap(newConfigRoot, this._config);
    this.initAll();
    this.actionAll();
  }

  @Input() public set map(map: Map<any>) {
    // check if size changed as it requires extra mechanics
//    console.debug('map update');
    if (
      map.size[0] !== this._map.size[0] ||
      map.size[1] !== this._map.size[1]
    ) {
      this._map.size = map.size;
      this.initAll();
    }

    this._map.tiles = map.tiles;
    
    this.svc.preload(this._map).then(_ => {
  //    console.debug('on preload');
      this.svc.drawImageLayer2(this.shadowMap.shadow, () => this.rerender());
      this.actionAll();
    });
  }

  @Input() public set tile(tile: Tile<any>) {
    if (!tile) { return; }

//    console.debug('tile update');
    const exist = this._map.tiles.findIndex(
      _ => _.coord[0] === tile.coord[0] && _.coord[1] === tile.coord[1]
    );
    if (exist >= 0) {
      this._map.tiles.splice(exist, 1, tile);
    } else {
      this._map.tiles.push(tile);
    }
    this.svc.drawImageLayer2(this.shadowMap.shadow, () => this.rerender());
    this.actionAll();
  }

  @Input() public set zoom(scroll: number) {
    if (!scroll) { return; }

    const X = this.cvs.set.parentSize[0] / 2;
    const Y = this.cvs.set.parentSize[1] / 2;

    this.zoomFn(X, Y, scroll);
    this.rerender();
  }

  @Input() public set locate(mark: string) {
    if (!mark) { return; }
    const limits = [10000, 10000, 0, 0];

    const found = this._map.tiles.filter(_ => _.tags && _.tags.includes(mark)).map(_ => {
      const co = [];
      this.svc.toIso(
        _.coord,
        this.cvs.set,
        this.cvs.config,
        this.cvs.map,
        co
      );
      return co;
    }).forEach(_ => {
      limits[0] = Math.min(limits[0], _[0] + (this.cvs.set.offset[0] + this.cvs.set.border[0]) * this.cvs.set.scale) - 50;
      limits[1] = Math.min(limits[1], _[1] + (this.cvs.set.offset[1] + this.cvs.set.border[1]) * this.cvs.set.scale) - 50;
      limits[2] = Math.max(limits[2], _[0] + this.cvs.set.tileSize[0] + (this.cvs.set.offset[2] + this.cvs.set.border[2]) * this.cvs.set.scale) + 50;
      limits[3] = Math.max(limits[3], _[1] + this.cvs.set.tileSize[1] + (this.cvs.set.offset[3] + this.cvs.set.border[3]) * this.cvs.set.scale) + 50;
    });
    console.log(limits);

    const width = limits[2] - limits[0];
    const height = limits[3] - limits[1];

    const scale = Math.min(
      this.cvs.set.parentSize[0] / width - this.cvs.set.scale,
      this.cvs.set.parentSize[1] / height - this.cvs.set.scale
    );

    console.log(scale);

    this.moveFn(-limits[0], -limits[1]);
    this.zoomFn(0, 0, scale);

    this.rerender();
  }

  // controls
  private mouseDown = false;
  private mouseDownStartEvent: undefined | MouseEvent;
  private mouseDownLastEvent: undefined | MouseEvent;
  private touchDownLastEvent: undefined | TouchEvent;
  private touchPinchLastEvent: undefined | TouchEvent;
  private refreshInterval = undefined;

  constructor(el: ElementRef, private svc: NgxCanvasIsomapService) {}

  private initAll() {
//    console.debug('init all');
    this.initCanvas(this.cvs);
    for (const shadow of Object.values(this.shadowMap)) {
      this.initCanvas(shadow, undefined, [...this.cvs.set.parentSize]);
    }
    this.svc.zoom2(0, 0, -this._config.maxZoom, this.cvs);
  }
  private initCanvas(
    layer: CanvasLayer,
    el?: ElementRef,
    dimensions?: number[]
  ) {
    if (el instanceof ElementRef) {
      layer.el = el.nativeElement;
    }
    this.svc.preloadCanvas2(layer, dimensions);
  }
  private actionAll() {
//    console.debug('action all');
//    this.svc.drawImageLayer2(this.shadowMap.shadow, () => this.rerender());
    this.svc.drawTextLayer2(this.shadowMap.shadowText, this.cvs.set.scale);
    this.svc.drawBackgroundLayer2(this.shadowMap.shadowBackground);
    this.svc.resize2(
      this.cvs.el.clientWidth - this.cvs.set.parentSize[0],
      this.cvs.el.clientHeight - this.cvs.set.parentSize[1],
      this.cvs
    );
    this.rerender();
  }

  ngOnInit() {
//    console.debug('on init');
    this.initAll();
  }

  @HostListener('window:resize', ['$event'])
  resize() {
    this.svc.resize2(
      this.cvs.el.clientWidth - this.cvs.set.parentSize[0],
      this.cvs.el.clientHeight - this.cvs.set.parentSize[1],
      this.cvs
    );
    this.rerender();
  }

  @HostListener('touchmove', ['$event'])
  onTouchRouter(event: TouchEvent) {
    if (event.touches.length === 1) {
      this.onMoveByTouch(event);
    } else {
      this.onZoomByTouch(event);
    }
    this.rerender();
  }

  @HostListener('dblclick', ['$event'])
  onZoomByDblClick(event: MouseEvent) {
    const X = event.offsetX;
    const Y = event.offsetY;
    const scroll = this._config.zoomStepTap;

    this.zoomFn(X, Y, scroll);
    this.rerender();

    if (event.preventDefault) {
      event.preventDefault();
    }
  }

  @HostListener('mousewheel', ['$event'])
  onZoomByWheel(event: WheelEvent) {
    const X = event.offsetX;
    const Y = event.offsetY;
    const scroll = -(event.deltaY / this._config.zoomStepScrollDebouncer);

    this.zoomFn(X, Y, scroll);
    this.rerender();

    if (event.preventDefault) {
      event.preventDefault();
    }
  }

  // will be called directly by router of touch
  onZoomByTouch(event: TouchEvent) {
    let X = 0;
    let Y = 0;
    let scroll = this._config.zoomStepTap;

    if (
      (this.touchPinchLastEvent || { timeStamp: 0 }).timeStamp -
        event.timeStamp <
      -200
    ) {
      return (this.touchPinchLastEvent = event);
    }

    X = event.touches.item(0).clientX;
    const adjX = event.touches.item(0).clientX - event.touches.item(1).clientX;
    const adjXB =
      this.touchPinchLastEvent.touches.item(0).clientX -
      this.touchPinchLastEvent.touches.item(1).clientX;
    X += adjX / 2;
    Y = event.touches.item(0).clientY;
    const adjY = event.touches.item(0).clientY - event.touches.item(1).clientY;
    const adjYB =
      this.touchPinchLastEvent.touches.item(0).clientY -
      this.touchPinchLastEvent.touches.item(1).clientY;
    Y += adjY / 2;

    scroll =
      (Math.abs(adjX - adjXB) > Math.abs(adjY - adjYB)
        ? adjX / adjXB
        : adjY / adjYB) - 1;

    this.touchPinchLastEvent = event;

    this.zoomFn(X, Y, scroll);

    if (event.preventDefault) {
      event.preventDefault();
    }
  }

  private prevClick = [];
  private zoomFn(X: number, Y: number, scroll: number) {
    const prevX = this.prevClick[0] || X;
    const prevY = this.prevClick[1] || Y;

    const zoom = this.cvs.set.scale;

    this.svc.zoom2(X, Y, scroll, this.cvs, [prevX - X, prevY - Y]);
    this.prevClick[0] = prevX;
    this.prevClick[1] = prevY;

    if (Math.floor(zoom) !== Math.floor(this.cvs.set.scale)) {
      this.svc.drawTextLayer2(this.shadowMap.shadowText, this.cvs.set.scale);
    }
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseout', ['$event'])
  onMouseup(event: MouseEvent) {
    if (!this.mouseDown) {
      return;
    }

    this.mouseDown = false;
    if (
      event.offsetX === this.mouseDownStartEvent.offsetX &&
      event.offsetY === this.mouseDownStartEvent.offsetY
    ) {
      const co = this.svc.toIsoCoByPx(
        [event.offsetX, event.offsetY],
        this.cvs.set,
        this.settingS,
        this._config,
        this._map
      );

      const found = this._map.tiles.filter(
        _ => _.coord[0] === co[0] && _.coord[1] === co[1]
      );

      if (found.length > 0) {
        this.selected.emit(found[0]);
      } else {
        this.selected.emit(undefined);
      }
    }
  }

  @HostListener('mousemove', ['$event'])
  onMoveByMouse(event: MouseEvent) {
    if (this.mouseDown) {
      this.moveByMouse(event);
      this.rerender();
    }
  }
  // will be called by touch router
  onMoveByTouch(event: TouchEvent) {
    this.moveByTouch(event);
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    this.mouseDown = true;
    this.mouseDownStartEvent = event;
    this.mouseDownLastEvent = event;
  }

  private moveByTouch(event: TouchEvent) {
    if (
      (this.touchDownLastEvent || { timeStamp: 0 }).timeStamp -
        event.timeStamp <
      -200
    ) {
      return (this.touchDownLastEvent = event);
    }

    this.moveFn(
      event.touches.item(0).clientX -
        this.touchDownLastEvent.touches.item(0).clientX,
      event.touches.item(0).clientY -
        this.touchDownLastEvent.touches.item(0).clientY
    );

    this.touchDownLastEvent = event;
    if (event.preventDefault) {
      event.preventDefault();
    }
  }

  private moveByMouse(event: MouseEvent) {
    this.moveFn(
      event.offsetX - this.mouseDownLastEvent.offsetX,
      event.offsetY - this.mouseDownLastEvent.offsetY
    );

    this.mouseDownLastEvent = event;
    if (event.preventDefault) {
      event.preventDefault();
    }
  }

  private moveFn(moveX: number, moveY: number) {
    this.svc.move2(-moveX, -moveY, this.cvs);
  }

  private rerender() {
    this.svc.copyMap(
      this.cvs.el.getContext('2d'),
      this.cvs.set,
      this.shadowMap.shadow.el,
      this.shadowMap.shadowText.el,
      this.shadowMap.shadowBackground.el,
      this.settingS,
      this._config,
      this._map
    );

    if (this._config.refresh !== 'automatic') {
      setTimeout(() => {
        this.rerender();
      }, this._config.refresh);
    }
  }
}
