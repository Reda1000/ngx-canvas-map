import { Component } from '@angular/core';
import { Tile } from 'projects/ngx-canvas-isomap/src/lib/models/map.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'canvas-demo';
  mark = '';
  config = {
    quality: 2,
    zoomStepTap: 1,
    zoomStepScrollDebouncer: 1000,
    maxZoom: 6,
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
        borderWidth: 0,
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
      imgTileHeightAdjustment: -20,
      imgTileHeightOffsetAdjustment: 0.58375
    }
  };
  tile = undefined;
  map = {
    size: [21, 36],
    tiles: [
      {
        coord: [0, 0],
        layers: ['wall_u_l', 'wall_u_r']
      },
      {
        coord: [1, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [3, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [4, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [5, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [6, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [7, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [8, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [9, 0],
        layers: ['wall_u_r', 'warehouse_big']
      },
      {
        coord: [10, 0],
        layers: ['wall_u_r', 'warehouse_big']
      },
      {
        coord: [11, 0],
        layers: ['wall_u_r', 'warehouse_big']
      },
      {
        coord: [12, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [13, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [14, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [15, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [16, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [17, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [18, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [19, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [20, 0],
        layers: ['wall_u_r']
      },
      {
        coord: [0, 1],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 2],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 3],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 4],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 5],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 6],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 7],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 8],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 9],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 10],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 11],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 12],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 13],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 14],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 15],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 16],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 17],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 18],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 19],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 20],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 21],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 22],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 23],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 24],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 25],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 26],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 27],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 28],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 29],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 30],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 31],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 32],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 33],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 34],
        layers: ['wall_u_l']
      },
      {
        coord: [0, 35],
        layers: ['wall_u_l']
      },
      {
        coord: [3, 2],
        layers: ['workstation_01']
      },
      {
        coord: [3, 3],
        layers: ['workstation_01']
      },
      {
        coord: [3, 4],
        layers: ['workstation_01']
      },
      {
        coord: [3, 5],
        layers: ['workstation_01']
      },
      {
        coord: [3, 6],
        layers: ['workstation_01']
      },
      {
        coord: [3, 8],
        layers: ['workstation_01']
      },
      {
        coord: [3, 9],
        layers: ['workstation_01']
      },
      {
        coord: [3, 10],
        layers: ['workstation_01']
      },
      {
        coord: [4, 2],
        layers: ['workstation_01']
      },
      {
        coord: [4, 3],
        layers: ['workstation_01']
      },
      {
        coord: [4, 4],
        layers: ['workstation_01']
      },
      {
        coord: [4, 5],
        layers: ['workstation_01']
      },
      {
        coord: [4, 6],
        layers: ['workstation_01']
      },
      {
        coord: [4, 8],
        layers: ['workstation_01']
      },
      {
        coord: [4, 9],
        layers: ['workstation_01']
      },
      {
        coord: [4, 10],
        layers: ['workstation_01']
      },
      {
        coord: [4, 11],
        layers: ['workstation_01']
      },
      {
        coord: [7, 6],
        layers: ['workstation_01']
      },
      {
        coord: [6, 6],
        layers: ['workstation_01']
      },
      {
        coord: [8, 3],
        layers: ['workstation_01']
      },
      {
        coord: [8, 4],
        layers: ['workstation_01']
      },
      {
        coord: [8, 6],
        layers: ['workcenter_01']
      },
      {
        coord: [8, 9],
        layers: ['workstation_01']
      },
      {
        coord: [8, 11],
        layers: ['workstation_01']
      },
      {
        coord: [10, 9],
        layers: ['workstation_01']
      },
      {
        coord: [11, 2],
        layers: ['conveyor_01']
      },
      {
        coord: [11, 3],
        layers: ['conveyor_01']
      },
      {
        coord: [11, 4],
        layers: ['conveyor_01']
      },
      {
        coord: [11, 5],
        layers: ['conveyor_01']
      },
      {
        coord: [11, 6],
        layers: ['conveyor_01']
      },
      {
        coord: [4, 15],
        layers: ['workcenter_01']
      },
      {
        coord: [6, 15],
        layers: ['workcenter_01']
      },
      {
        coord: [9, 14],
        layers: ['workcenter_01']
      },
      {
        coord: [9, 15],
        layers: ['workcenter_01']
      },
      {
        coord: [10, 15],
        layers: ['workcenter_01']
      },
      {
        coord: [11, 15],
        layers: ['workcenter_01']
      },
      {
        coord: [11, 14],
        layers: ['workcenter_01']
      },
      {
        coord: [12, 15],
        layers: ['workcenter_01']
      },
      {
        coord: [13, 15],
        layers: ['workcenter_01']
      },
      {
        coord: [14, 15],
        layers: ['workcenter_01']
      },
      {
        coord: [14, 14],
        layers: ['workcenter_01']
      },
      {
        coord: [14, 14],
        layers: ['workcenter_01']
      },
      {
        coord: [14, 14],
        layers: ['workcenter_01']
      },
      {
        coord: [14, 14],
        layers: ['workcenter_01']
      },
      {
        coord: [3, 17],
        layers: ['workcenter_01']
      },
      {
        coord: [4, 17],
        layers: ['workcenter_01']
      },
      {
        coord: [5, 17],
        layers: ['workcenter_01']
      },
      {
        coord: [6, 17],
        layers: ['workcenter_01']
      },
      {
        coord: [3, 18],
        layers: ['workcenter_01']
      },
      {
        coord: [4, 18],
        layers: ['workcenter_01']
      },
      {
        coord: [5, 18],
        layers: ['workcenter_01']
      },
      {
        coord: [6, 18],
        layers: ['workcenter_01']
      },
      {
        coord: [10, 17],
        layers: ['workcenter_01']
      },
      {
        coord: [11, 17],
        layers: ['workcenter_01']
      },
      {
        coord: [12, 17],
        layers: ['workcenter_01']
      },
      {
        coord: [13, 17],
        layers: ['workcenter_01']
      },
      {
        coord: [10, 18],
        layers: ['workcenter_01']
      },
      {
        coord: [11, 18],
        layers: ['workcenter_01']
      },
      {
        coord: [13, 18],
        layers: ['workcenter_01']
      },
      {
        coord: [2, 26],
        layers: ['workcenter_01']
      },
      {
        coord: [3, 26],
        layers: ['workcenter_01']
      },
      {
        coord: [4, 26],
        layers: ['workcenter_01']
      },
      {
        coord: [5, 26],
        layers: ['workcenter_01']
      },
      {
        coord: [6, 26],
        layers: ['workcenter_01']
      },
      {
        coord: [7, 26],
        layers: ['workcenter_01']
      },
      {
        coord: [2, 27],
        layers: ['workcenter_01']
      },
      {
        coord: [3, 27],
        layers: ['workcenter_01']
      },
      {
        coord: [4, 27],
        layers: ['workcenter_01']
      },
      {
        coord: [5, 27],
        layers: ['workcenter_01']
      },
      {
        coord: [6, 27],
        layers: ['workcenter_01']
      },
      {
        coord: [5, 26],
        layers: ['workcenter_01']
      },
      {
        coord: [6, 26],
        layers: ['workcenter_01']
      },
      {
        coord: [7, 26],
        layers: ['workcenter_01']
      },
      {
        coord: [10, 27],
        layers: ['workcenter_01']
      },
      {
        coord: [2, 32],
        layers: ['warehouse_big']
      },
      {
        coord: [3, 32],
        layers: ['warehouse_big']
      },
      {
        coord: [4, 32],
        layers: ['warehouse_big']
      },
      {
        coord: [5, 32],
        layers: ['warehouse_big']
      },
      {
        coord: [6, 32],
        layers: ['warehouse_big']
      },
      {
        coord: [7, 32],
        layers: ['warehouse_auto']
      },
      {
        coord: [2, 34],
        layers: ['warehouse_big']
      },
      {
        coord: [3, 34],
        layers: ['warehouse_big']
      },
      {
        coord: [4, 34],
        layers: ['warehouse_big']
      },
      {
        coord: [5, 34],
        layers: ['warehouse_big']
      },
      {
        coord: [6, 34],
        layers: ['warehouse_big']
      },
      {
        coord: [7, 34],
        layers: ['warehouse_auto']
      },
      {
        coord: [11, 32],
        layers: ['warehouse_big']
      },
      {
        coord: [13, 32],
        layers: ['warehouse_big']
      },
      {
        coord: [14, 32],
        layers: ['warehouse_big']
      },
      {
        coord: [9, 34],
        layers: ['finished_goods_big']
      },
      {
        coord: [11, 34],
        layers: ['finished_goods_big']
      },
      {
        coord: [13, 34],
        layers: ['finished_goods_big']
      },
      {
        coord: [14, 34],
        layers: ['finished_goods_big'],
        tags: ['U', 'U7', 'U710'],
        custom: {
          plant: 'U'
        }
      },
      {
        coord: [2, 0],
        name: [{ zoom: 1, text: 'test' }, { zoom: 2, text: 'TEST' }],
        layers: ['wall_u_r', 'finished_goods_big'],
        tags: ['U'],
        custom: {
          plant: 'U'
        }
      }
    ]
  };

  selectedTile(evt: Tile<any>) {
    console.log('test', evt);
    if (evt && evt.custom) {
      this.mark = evt.custom.plant;
    } else {
      this.mark = '';
    }
  }

  changed(map: any) {
    console.log(JSON.parse(map.srcElement.value));
    this.map = JSON.parse(map.srcElement.value);
  }

  changedTile(map: any) {
    console.log(JSON.parse(map.srcElement.value));
    this.tile = JSON.parse(map.srcElement.value);
  }
}
