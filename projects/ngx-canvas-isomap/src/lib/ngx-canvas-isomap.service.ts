import { Injectable } from '@angular/core';
import { Promise } from 'q';

import { CanvasConfig } from './models/canvas-config.interface';
import { CanvasLayer, CanvasShadowLayer } from './models/canvas-layer.interface';
import { CanvasSettings, ORRIENTATION } from './models/canvas-settings.interface';
import { Map, MapConfig, Tile } from './models/map.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxCanvasIsomapService {
  preloadedImages: { [key: string]: HTMLImageElement } = {};
  listener: { [key: string]: () => any } = {};

  constructor() {}

  preload(map: Map<any>): Promise<boolean> {
    const loadingImages: { [key: string]: boolean } = {};
    let loading = 0;

    return Promise(resolver => {
      map.tiles.forEach(_ =>
        _.layers.forEach(__ => {
          if (!loadingImages[__]) {
            const img = new Image();
            loading++;
            loadingImages[__] = true;
            img.onload = ___ => {
              loadingImages[__] = false;
              this.preloadedImages[__] = img;
              if (--loading === 0) {
                resolver(true);
              }
            };
            img.onerror = ___ => {
              loadingImages[__] = false;
              if (--loading === 0) {
                resolver(true);
              }
            };
            img.src = 'assets/tiles/' + __ + '.svg';
          }
        })
      );
      if(loading === 0) {
        resolver(true);
      }
    });
  }

  listen(cb: () => any) {
    const key = Date.now() + '';
    this.listener[key] = cb;
    return key;
  }

  unlisten(key: string) {
    delete this.listener[key];
  }

  preloadShadowCanvas2(layer: CanvasShadowLayer) {
    return this.preloadShadowCanvas(
      layer.set.parentSize[0],
      layer.set.parentSize[1],
      layer.set,
      layer.config,
      { size: layer.map.size, tiles: [] },
      layer.el
    );
  }
  preloadShadowCanvas(
    width: number,
    height: number,
    settings: CanvasSettings,
    config: CanvasConfig,
    map: Map<any>,
    canvas?: HTMLCanvasElement
  ): HTMLCanvasElement {
    if (!canvas) {
      canvas = document.createElement('canvas');
    }

    settings.offset = [0, 0, 0, 0];
    settings.tileSize[0] = (width / (map.size[0] + map.size[1])) * 2;
    settings.tileSize[1] = settings.tileSize[0] / 2;

    const heightModifier = config.topOffset * settings.tileSize[1];

    canvas.width = width;
    canvas.height = height + heightModifier;

    settings.offset[ORRIENTATION.NORTH] = heightModifier;
    settings.border[ORRIENTATION.WEST] = 0;
    settings.border[ORRIENTATION.NORTH] = 0;
    settings.border[ORRIENTATION.EAST] = 0;
    settings.border[ORRIENTATION.SOUTH] = 0;
    return canvas;
  }

  preloadCanvas2(layer: CanvasLayer, dimensions?: number[]) {
    if (layer.hasOwnProperty('drawAction')) {
      dimensions = dimensions || [
        layer.set.parentSize[0],
        layer.set.parentSize[1]
      ];

      dimensions[0] = Math.min(
        dimensions[0] * layer.config.maxZoom,
        layer.config.maxSize
      );
      dimensions[1] = Math.min(
        dimensions[1] * layer.config.maxZoom,
        (layer.config.maxSize) / 2
      );
      if (dimensions[1] >= dimensions[0] / 2) {
        layer.set.parentSize[0] = dimensions[0];
        layer.set.parentSize[1] = dimensions[0] / 2;
      } else {
        layer.set.parentSize[0] = dimensions[1] * 2;
        layer.set.parentSize[1] = dimensions[1];
      }

      return this.preloadShadowCanvas(
        layer.set.parentSize[0],
        layer.set.parentSize[1],
        layer.set,
        layer.config,
        { size: layer.map.size, tiles: [] },
        layer.el
      );
    } else {
      dimensions = dimensions || [layer.el.offsetWidth, layer.el.offsetHeight];
      const ratio = dimensions[0] / dimensions[1];

      if (dimensions[0] > layer.config.maxSize) {
        dimensions[0] = layer.config.maxSize;
        dimensions[1] = dimensions[0] / ratio;
      }
      if (dimensions[1] > layer.config.maxSize / 2) {
        dimensions[1] = layer.config.maxSize / 2;
        dimensions[0] = dimensions[1] * ratio;
      }

      const cvs = this.preloadCanvas(
        dimensions[0],
        dimensions[1],
        layer.set,
        layer.config,
        { size: layer.map.size, tiles: [] },
        layer.el
      );

      this.zoom2(0, 0, -layer.config.maxZoom, layer);

      return cvs;
    }
  }
  preloadCanvas(
    width: number,
    height: number,
    settings: CanvasSettings,
    config: CanvasConfig,
    map: Map<any>,
    canvas?: HTMLCanvasElement
  ): HTMLCanvasElement {
    if (!canvas) {
      canvas = document.createElement('canvas');
    }
    canvas.width = width;
    canvas.height = height;

    settings.offset = [0, 0, 0, 0];
    settings.border = [0, 0, 0, 0];

    if (width > (height - config.topOffset) * 2) {
      settings.border[ORRIENTATION.WEST] = settings.border[ORRIENTATION.EAST] =
        (width - (height - config.topOffset) * 2) / 2;
    } else {
      settings.border[ORRIENTATION.NORTH] = settings.border[
        ORRIENTATION.SOUTH
      ] = (height - config.topOffset - width / 2) / 2;
    }

    settings.tileSize[0] =
      ((width -
        settings.border[ORRIENTATION.WEST] -
        settings.border[ORRIENTATION.EAST]) /
        (map.size[0] + map.size[1])) *
      2;
    settings.tileSize[1] = settings.tileSize[0] / 2;

    return canvas;
  }

  resize2(addX: number, addY: number, layer: CanvasLayer) {
    this.resize(addX, addY, layer.el, layer.set, layer.config);
  }

  resize(
    addX: number,
    addY: number,
    canvas: HTMLCanvasElement,
    settings: CanvasSettings,
    config: CanvasConfig
  ) {
    settings.parentSize[0] += addX;
    settings.parentSize[1] += addY;
    canvas.width += addX;
    canvas.height += addY;

    settings.border[ORRIENTATION.WEST] += addX / 2;
    settings.border[ORRIENTATION.NORTH] += addY / 2;
    settings.border[ORRIENTATION.EAST] += addX / 2;
    settings.border[ORRIENTATION.SOUTH] += addY / 2;
  }

  zoom2(posX: number, posY: number, step: number, cvs: CanvasLayer, workaround?: number[]) {
    this.zoom(posX, posY, step, cvs.el, cvs.set, cvs.config, undefined, workaround);
  }
  zoom(
    posX: number,
    posY: number,
    step: number,
    canvas: HTMLCanvasElement,
    settings: CanvasSettings,
    config: CanvasConfig,
    map?: Map<any>,
    workaround?: number[]
  ) {
    // obey configured limits of zooming
    if (settings.scale + step >= config.maxZoom) {
      step = -(settings.scale - config.maxZoom);
    } else if (settings.scale + step <= 1) {
      step = -(settings.scale - 1);
    }

    // cancel if atual no zooming doable
    if (step === 0) {
      return;
    }

    const bef = settings.scale;

    // reset zoom
    settings.scale = settings.scale + step;

    // calculate new offsets
    settings.offset[ORRIENTATION.EAST] = 0;
    settings.offset[ORRIENTATION.SOUTH] = 0;
    settings.offset[ORRIENTATION.WEST] -= posX * (1 - 1 / settings.scale) - posX * (1 - 1 / bef);
    settings.offset[ORRIENTATION.NORTH] -= posY * (1 - 1 / settings.scale) - posY * (1 - 1 / bef);

    if (settings.scale !== 1) {
      settings.offset[ORRIENTATION.EAST] =
        (-settings.parentSize[0] * (settings.scale - 1)) / settings.scale -
        settings.offset[ORRIENTATION.WEST];

      settings.offset[ORRIENTATION.SOUTH] =
        (-settings.parentSize[1] * (settings.scale - 1)) / settings.scale -
        settings.offset[ORRIENTATION.NORTH];
    }
  }

  move2(moveX: number, moveY: number, cvs: CanvasLayer) {
    this.move(moveX, moveY, cvs.el, cvs.set, cvs.config);
  }
  move(
    xStep: number,
    yStep: number,
    canvas: HTMLCanvasElement,
    settings: CanvasSettings,
    config: CanvasConfig
  ) {
    settings.offset[ORRIENTATION.WEST] -= xStep / settings.scale;
    settings.offset[ORRIENTATION.NORTH] -= yStep / settings.scale;
    settings.offset[ORRIENTATION.EAST] += xStep / settings.scale;
    settings.offset[ORRIENTATION.SOUTH] += yStep / settings.scale;
  }

  copyMap(
    ctxTarget: CanvasRenderingContext2D,
    settings: CanvasSettings,
    ctxSource: HTMLCanvasElement,
    ctxSourceText: HTMLCanvasElement,
    ctxSourceBG: HTMLCanvasElement,
    settingsS: CanvasSettings,
    config: CanvasConfig,
    map: Map<any>
  ) {
    const copy = (
      target: CanvasRenderingContext2D,
      set: CanvasSettings,
      setSrc: CanvasSettings,
      source: HTMLCanvasElement,
      cfg: CanvasConfig
    ) => {
      const scale = cfg.maxZoom / set.scale;

      target.drawImage(
        source,
        -(set.offset[ORRIENTATION.WEST] + set.border[ORRIENTATION.WEST]) *
          cfg.maxZoom,
        -(set.offset[ORRIENTATION.NORTH] + set.border[ORRIENTATION.NORTH]) *
          cfg.maxZoom,
        set.parentSize[0] * scale,
        set.parentSize[1] * scale,
        0,
        0,
        set.parentSize[0],
        set.parentSize[1]
      );
    };

    ctxTarget.fillStyle = config.style.map.backgroundColor;
    ctxTarget.fillRect(0, 0, settings.parentSize[0], settings.parentSize[1]);

    copy(ctxTarget, settings, settingsS, ctxSourceBG, config);
    copy(ctxTarget, settings, settingsS, ctxSourceText, config);
    copy(ctxTarget, settings, settingsS, ctxSource, config);
  }

  drawImageLayer2(layer: CanvasShadowLayer, cb?: () => any) {
    this.drawImageLayer(
      layer.el.getContext('2d'),
      layer.set,
      layer.config,
      layer.map,
      cb
    );
  }
  /**
   * ReDraw the layer that contains pictures. It will be very costly so try to avoid to redraw
   * @param ctx
   * @param settings
   * @param config
   * @param map
   */
  drawImageLayer(
    ctx: CanvasRenderingContext2D,
    settings: CanvasSettings,
    config: CanvasConfig,
    map: Map<any>,
    cb?: () => any
  ) {
    //    ctx.fillStyle = 'blue';
    //    ctx.fillRect(0, 0, settings.parentSize[0], settings.parentSize[1]);
    ctx.clearRect(
      0,
      0,
      settings.parentSize[0] * config.maxZoom,
      settings.parentSize[1] * config.maxZoom
    );

    // START drawing content on tile
    map.tiles.forEach(_ => this.drawTile(ctx, _, settings, config, map, cb));
    // END drawing content on tile
  }

  drawTextLayer2(layer: CanvasShadowLayer, scale?: number) {
    this.drawTextLayer(
      layer.el.getContext('2d'),
      layer.set,
      layer.config,
      layer.map,
      scale || 1
    );
  }
  /**
   * ReDraw the layer that contains text. It will be also costly by rotating and computing text according to zoom
   * @param ctx
   * @param settings
   * @param config
   * @param map
   * @param zoom
   */
  drawTextLayer(
    ctx: CanvasRenderingContext2D,
    settings: CanvasSettings,
    config: CanvasConfig,
    map: Map<any>,
    zoom: number
  ) {
    // TODO improve calculation speed by drawing all text nromally and then rotate the result entirely. Right now each text is rotated and drawed
    ctx.clearRect(
      0,
      0,
      settings.parentSize[0] * config.maxZoom,
      settings.parentSize[1] * config.maxZoom
    );
    // START drawing text in 120degrees rotation
    map.tiles.forEach(_ => this.drawText(ctx, _, settings, config, map, zoom));
    // END drawing text in 120degrees rotation
  }

  drawBackgroundLayer2(layer: CanvasShadowLayer, select?: string[]) {
    this.drawBackgroundLayer(
      layer.el.getContext('2d'),
      layer.set,
      layer.config,
      layer.map,
      select
    );
  }
  /**
   * ReDraw the layer that contains the background. It will be least costly but there is not much need to redraw 
   * except basic map size has changed or similar config has changed
   * @param ctx
   * @param settings
   * @param config
   * @param map
   * @param select
   */
  drawBackgroundLayer(
    ctx: CanvasRenderingContext2D,
    settings: CanvasSettings,
    config: CanvasConfig,
    map: Map<any>,
    select?: string[]
  ) {
    const temp: number[] = [];
    ctx.fillStyle = config.style.map.backgroundColor;
    ctx.fillRect(
      0,
      0,
      settings.parentSize[0] * config.maxZoom,
      settings.parentSize[1] * config.maxZoom
    );
    // START drawing tile area
    ctx.fillStyle = config.style.tile.backgroundColor;
    ctx.strokeStyle =
      config.style.map.borderColor || config.style.tile.borderColor;
    ctx.lineWidth =
      config.style.map.borderWidth || config.style.tile.borderWidth;
    ctx.beginPath();

    this.toIso([0, 0], settings, config, map, temp);
    ctx.moveTo(temp[0], temp[1]);
    this.toIso([map.size[0], 0], settings, config, map, temp);
    ctx.lineTo(temp[0], temp[1]);
    this.toIso([map.size[0], map.size[1]], settings, config, map, temp);
    ctx.lineTo(temp[0], temp[1]);
    this.toIso([0, map.size[1]], settings, config, map, temp);
    ctx.lineTo(temp[0], temp[1]);
    this.toIso([0, 0], settings, config, map, temp);
    ctx.lineTo(temp[0], temp[1]);

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // END drawing tile area

    // START drawing tile area (in)lines
    // dont draw if borderWith is set 0
    if (config.style.tile.borderWidth) {
      ctx.strokeStyle = config.style.tile.borderColor;
      ctx.lineWidth = config.style.tile.borderWidth;
      ctx.beginPath();
      for (let index = 1; index < map.size[1]; index++) {
        this.toIso([0, index], settings, config, map, temp);
        ctx.moveTo(temp[0], temp[1]);
        this.toIso([map.size[0], index], settings, config, map, temp);
        ctx.lineTo(temp[0], temp[1]);
      }
      for (let index = 1; index < map.size[0]; index++) {
        this.toIso([index, 0], settings, config, map, temp);
        ctx.moveTo(temp[0], temp[1]);
        this.toIso([index, map.size[1]], settings, config, map, temp);
        ctx.lineTo(temp[0], temp[1]);
      }

      ctx.closePath();
      ctx.stroke();
    }
    // END drawing tile area (in)lines

    const tiles = map.tiles.filter(_ => {
      let result = false;
      if (_.tags && select) {
        for (const item of select) {
          result = result || _.tags.includes(item);
        }
      }
      return result;
    });
    // START colorizing tiles
    tiles.forEach(tile => {
      const co = tile.coord;

      if (config.style.selectedTile.borderWidth) {
        ctx.fillStyle = config.style.selectedTile.backgroundColor;
        ctx.strokeStyle = config.style.selectedTile.borderColor;
        ctx.lineWidth = config.style.selectedTile.borderWidth;
        ctx.beginPath();

        this.toIso([co[0], co[1]], settings, config, map, temp);
        ctx.moveTo(temp[0], temp[1]);
        this.toIso([co[0] + 1, co[1]], settings, config, map, temp);
        ctx.lineTo(temp[0], temp[1]);
        this.toIso([co[0] + 1, co[1] + 1], settings, config, map, temp);
        ctx.lineTo(temp[0], temp[1]);
        this.toIso([co[0] + 1, co[1] + 1], settings, config, map, temp);
        ctx.lineTo(temp[0], temp[1]);
        this.toIso([co[0], co[1] + 1], settings, config, map, temp);
        ctx.lineTo(temp[0], temp[1]);

        ctx.closePath();
        ctx.fill();
      }
    });
    /**
     * END colorizing tiles
     */
  }

  drawTile(
    ctx: CanvasRenderingContext2D,
    tile: Tile<any>,
    settings: CanvasSettings,
    config: CanvasConfig,
    map: Map<any>,
    cb?: () => any
  ) {
    const co = [];
    this.toIso([tile.coord[0], tile.coord[1]], settings, config, map, co);

    for(const _ of tile.layers) {
      if (this.preloadedImages[_]) {
        const width = settings.tileSize[0];
        ctx.drawImage(
          this.preloadedImages[_],
          co[0] - settings.tileSize[0] / 2,
          co[1] - settings.tileSize[1] * config.cheat.imgTileHeightOffsetAdjustment,
          width,
          ((this.preloadedImages[_].height +
            config.cheat.imgTileHeightAdjustment) /
            this.preloadedImages[_].width) *
            width
        );
      } else if(cb) {
        const img = new Image();
        img.onload = __ => {
          this.preloadedImages[_] = img;
          this.drawTile(ctx, tile, settings, config, map);
          cb();
        };
        img.src = 'assets/tiles/' + _ + '.svg';
      }
    };
  }

  drawText(
    ctx: CanvasRenderingContext2D,
    tile: Tile<any>,
    settings: CanvasSettings,
    config: CanvasConfig,
    map: Map<any>,
    zoom: number
  ) {
    if (!tile.name) {
      return;
    }

    const co = [];
    this.toIso(
      [tile.coord[0] + 0.5, tile.coord[1] + 1],
      settings,
      config,
      map,
      co
    );

    ctx.save();
    ctx.font = `${Math.floor(config.style.tile.fontSize * settings.tileSize[1])}px ${
      config.style.tile.fontFamily
    }`;
    ctx.fillStyle = config.style.tile.fontColor;
    ctx.translate(co[0] + 3, co[1] - 3);
    ctx.rotate(27 * (Math.PI / 180));
    ctx.transform(1, 0, -0.8, 1, 0, 0);
    ctx.textAlign = config.style.tile.textAlign;
    ctx.fillText(this.calcName(tile, zoom), 0, 0);
    ctx.restore();
  }

  public toIsoCoByPx(
    px: number[],
    settings: CanvasSettings,
    settingS: CanvasSettings,
    config: CanvasConfig,
    map: Map<any>
  ) {
    console.log(settings);
    const TILE_WIDTH_HALF = (settings.tileSize[0] / 2) * settings.scale;
    const TILE_HEIGHT_HALF = TILE_WIDTH_HALF / 2;
    const BORDER_TOP =
      settings.offset[ORRIENTATION.NORTH] +
      settings.border[ORRIENTATION.NORTH] +
      (settingS.offset[ORRIENTATION.NORTH]) / config.maxZoom;
    const BORDER_LEFT =
      settings.offset[ORRIENTATION.WEST] +
      settings.border[ORRIENTATION.WEST] +
      (settingS.offset[ORRIENTATION.WEST]) / config.maxZoom +
      (settings.parentSize[0] - settings.border[ORRIENTATION.WEST] - settings.border[ORRIENTATION.EAST]) / (map.size[0] / map.size[1] + 1);
    return [
      Math.floor(
        ((2 * (px[1] - BORDER_TOP * settings.scale)) / TILE_WIDTH_HALF +
          (px[0] - BORDER_LEFT * settings.scale) / TILE_WIDTH_HALF) /
          2
      ),
      Math.floor(
        ((2 * (px[1] - BORDER_TOP * settings.scale)) / TILE_HEIGHT_HALF -
          (px[0] - BORDER_LEFT * settings.scale) / TILE_HEIGHT_HALF) /
          4
      )
    ];
  }

  public toIso(
    coors: number[],
    settings: CanvasSettings,
    config: CanvasConfig,
    map: MapConfig,
    result: number[]
  ) {
    const TILE_WIDTH_HALF = settings.tileSize[0] / 2;
    const TILE_HEIGHT_HALF = TILE_WIDTH_HALF / 2;
    const BORDER_TOP = settings.offset[ORRIENTATION.NORTH];
    const BORDER_LEFT =
      settings.offset[ORRIENTATION.WEST] +
      settings.parentSize[0] / (map.size[0] / map.size[1] + 1);
    result[0] =
      BORDER_LEFT + coors[0] * TILE_WIDTH_HALF - coors[1] * TILE_WIDTH_HALF;
    result[1] =
      BORDER_TOP + coors[0] * TILE_HEIGHT_HALF + coors[1] * TILE_HEIGHT_HALF;
  }

  calcName(tile: Tile<any>, zoom: number) {
    let result = '';
    for (const name of tile.name) {
      if (name.zoom <= zoom) {
        result = name.text;
      }
    }
    return result;
  }
}
