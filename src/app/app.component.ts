import { Component } from '@angular/core';
import { Tile } from 'projects/ngx-canvas-isomap/src/lib/models/map.interface';
import { CanvasControl } from 'projects/ngx-canvas-isomap/src/public_api';

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
        backgroundColor: 'lightgrey',
        borderColor: 'darkgrey',
        borderWidth: 0,
        fontSize: 0.15, //0.26739,
        fontFamily: 'Arial',
        fontColor: 'black',
        textAlign: 'center'
      },
      selectedTile: {
        backgroundColor: 'yellow',
        borderColor: 'grey',
        borderWidth: 2,
        fontSize: 0.15, //0.26739,
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
    "size": [
      21,
      36
    ],
    "tiles": [
      {
        "coord": [
          0,
          35
        ],
        "layers": [
          "wall_u_l",
          "wall_b_l"
        ]
      },
      {
        "coord": [
          0,
          34
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          33
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          32
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          31
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          30
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          29
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          28
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          27
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          26
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          25
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          24
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          23
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          22
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          21
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          20
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          19
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          18
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          17
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          16
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          15
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          14
        ],
        "layers": [
          "wall_u_l",
          "conveyor_01"
        ]
      },
      {
        "coord": [
          0,
          13
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          12
        ],
        "layers": [
          "wall_u_l",
          "wall_b_l"
        ]
      },
      {
        "coord": [
          0,
          11
        ],
        "layers": [
          "wall_u_l",
          "wall_b_l"
        ]
      },
      {
        "coord": [
          0,
          10
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          9
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          8
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          7
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          6
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          5
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          4
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          3
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          2
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          1
        ],
        "layers": [
          "wall_u_l"
        ]
      },
      {
        "coord": [
          0,
          0
        ],
        "layers": [
          "wall_u_l",
          "wall_u_r"
        ]
      },
      {
        "coord": [
          1,
          0
        ],
        "layers": [
          "wall_u_r",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          2,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          3,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          4,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          5,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          6,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          7,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          8,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          9,
          0
        ],
        "layers": [
          "wall_u_r",
          "warehouse_big"
        ]
      },
      {
        "coord": [
          10,
          0
        ],
        "layers": [
          "wall_u_r",
          "warehouse_big"
        ]
      },
      {
        "coord": [
          11,
          0
        ],
        "layers": [
          "wall_u_r",
          "warehouse_big"
        ]
      },
      {
        "coord": [
          12,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          13,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          14,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          15,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          16,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          17,
          0
        ],
        "layers": [
          "wall_u_r",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          18,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          19,
          0
        ],
        "layers": [
          "wall_u_r"
        ]
      },
      {
        "coord": [
          2,
          34
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          3,
          34
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          4,
          34
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          5,
          34
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          6,
          34
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          7,
          34
        ],
        "layers": [
          "warehouse_auto"
        ]
      },
      {
        "coord": [
          2,
          32
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          3,
          32
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          4,
          32
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          5,
          32
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          6,
          32
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          7,
          32
        ],
        "layers": [
          "warehouse_auto"
        ]
      },
      {
        "coord": [
          1,
          31
        ],
        "layers": [
          "road_crossroad_east"
        ]
      },
      {
        "coord": [
          1,
          30
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          29
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          28
        ],
        "layers": [
          "road_crossroad_e_s_w"
        ]
      },
      {
        "coord": [
          2,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          3,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          4,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          5,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          6,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          7,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          8,
          28
        ],
        "layers": [
          "road_crossroad"
        ]
      },
      {
        "coord": [
          9,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          1,
          27
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          26
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          25
        ],
        "layers": [
          "road_crossroad_e_s_w"
        ]
      },
      {
        "coord": [
          2,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          3,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          4,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          5,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          6,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          7,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          8,
          25
        ],
        "layers": [
          "road_crossroad"
        ]
      },
      {
        "coord": [
          9,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          1,
          24
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          23
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          22
        ],
        "layers": [
          "road_crossroad_e_s_w"
        ]
      },
      {
        "coord": [
          2,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          3,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          4,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          5,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          6,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          7,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          8,
          22
        ],
        "layers": [
          "road_crossroad"
        ]
      },
      {
        "coord": [
          9,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          1,
          21
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          20
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          19
        ],
        "layers": [
          "road_crossroad_e_s_w"
        ]
      },
      {
        "coord": [
          2,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          3,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          4,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          5,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          6,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          7,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          8,
          19
        ],
        "layers": [
          "road_crossroad"
        ]
      },
      {
        "coord": [
          9,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          1,
          18
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          17
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          16
        ],
        "layers": [
          "road_crossroad_e_s_w"
        ]
      },
      {
        "coord": [
          2,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          3,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          4,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          5,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          6,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          7,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          8,
          16
        ],
        "layers": [
          "road_crossroad"
        ]
      },
      {
        "coord": [
          9,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          1,
          15
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          14
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          1,
          13
        ],
        "layers": [
          "road_crossroad_south"
        ]
      },
      {
        "coord": [
          2,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          3,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          4,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          5,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          6,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          7,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          8,
          13
        ],
        "layers": [
          "road_crossroad_s_w_n"
        ]
      },
      {
        "coord": [
          9,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          2,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          3,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          4,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          8,
          33
        ],
        "layers": [
          "road_crossroad_east"
        ]
      },
      {
        "coord": [
          9,
          31
        ],
        "layers": [
          "road_crossroad_s_w_n"
        ]
      },
      {
        "coord": [
          5,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          6,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          7,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          8,
          31
        ],
        "layers": [
          "road_crossroad"
        ]
      },
      {
        "coord": [
          9,
          32
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          9,
          33
        ],
        "layers": [
          "road_crossroad_north"
        ]
      },
      {
        "coord": [
          10,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          11,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          12,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          13,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          14,
          13
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          15,
          13
        ],
        "layers": [
          "road_crossroad_west",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          11,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          12,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          13,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          14,
          16
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          15,
          16
        ],
        "layers": [
          "road_crossroad_w_n_e",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          11,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          12,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          13,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          14,
          19
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          15,
          19
        ],
        "layers": [
          "road_crossroad_w_n_e",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          11,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          12,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          13,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          14,
          22
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          15,
          22
        ],
        "layers": [
          "road_crossroad_w_n_e",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          11,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          12,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          13,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          14,
          25
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          15,
          25
        ],
        "layers": [
          "road_crossroad_w_n_e",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          11,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          12,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          13,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          14,
          28
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          15,
          28
        ],
        "layers": [
          "road_crossroad_w_n_e",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          11,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          12,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          13,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          14,
          31
        ],
        "layers": [
          "road_down"
        ]
      },
      {
        "coord": [
          15,
          31
        ],
        "layers": [
          "road_crossroad_north",
          "wall_b_r"
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7020",
          "workstation": "U7020"
        },
        "tags": [
          "U7",
          "U7020",
          "U7020"
        ],
        "coord": [
          2,
          27
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7020"
          }
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7030",
          "workstation": "U7030"
        },
        "tags": [
          "U7",
          "U7030",
          "U7030"
        ],
        "coord": [
          3,
          27
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7030"
          }
        ]
      },
      {
        "coord": [
          5,
          27
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7050"
          }
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7040",
          "workstation": "U7040"
        },
        "tags": [
          "U7",
          "U7040",
          "U7040"
        ],
        "coord": [
          4,
          27
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7040"
          }
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7060",
          "workstation": "U7060"
        },
        "tags": [
          "U7",
          "U7060",
          "U7060"
        ],
        "coord": [
          6,
          27
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7060"
          }
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7020",
          "workstation": "U7020"
        },
        "tags": [
          "U7",
          "U7020",
          "U7020"
        ],
        "coord": [
          2,
          26
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7020"
          }
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7030",
          "workstation": "U7030"
        },
        "tags": [
          "U7",
          "U7030",
          "U7030"
        ],
        "coord": [
          3,
          26
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7030"
          }
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7040",
          "workstation": "U7040"
        },
        "tags": [
          "U7",
          "U7040",
          "U7040"
        ],
        "coord": [
          4,
          26
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7040"
          }
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7050",
          "workstation": "U7050"
        },
        "tags": [
          "U7",
          "U7050",
          "U7050"
        ],
        "coord": [
          5,
          26
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7050"
          }
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7060",
          "workstation": "U7060"
        },
        "tags": [
          "U7",
          "U7060",
          "U7060"
        ],
        "coord": [
          6,
          26
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7060"
          }
        ]
      },
      {
        "coord": [
          8,
          26
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7060",
          "workstation": "U7060"
        },
        "tags": [
          "U7",
          "U7060",
          "U7060"
        ],
        "coord": [
          7,
          26
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7060"
          }
        ]
      },
      {
        "coord": [
          8,
          27
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          32
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          29
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          30
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          24
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          23
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "custom": {
          "line": "U7",
          "workcenter": "U7070",
          "workstation": "U7070"
        },
        "tags": [
          "U7",
          "U7070",
          "U7070"
        ],
        "coord": [
          10,
          27
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U7070"
          }
        ]
      },
      {
        "coord": [
          8,
          21
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          20
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          18
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          17
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          15
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          8,
          14
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4010",
          "workstation": "U4010"
        },
        "tags": [
          "U4",
          "U4010",
          "U4010"
        ],
        "coord": [
          3,
          18
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4010"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4010",
          "workstation": "U4010"
        },
        "tags": [
          "U4",
          "U4010",
          "U4010"
        ],
        "coord": [
          3,
          17
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4010"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4020",
          "workstation": "U4020"
        },
        "tags": [
          "U4",
          "U4020",
          "U4020"
        ],
        "coord": [
          4,
          18
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4020"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4020",
          "workstation": "U4020"
        },
        "tags": [
          "U4",
          "U4020",
          "U4020"
        ],
        "coord": [
          4,
          17
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4020"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4020",
          "workstation": "U4020"
        },
        "tags": [
          "U4",
          "U4020",
          "U4020"
        ],
        "coord": [
          5,
          18
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4030"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4030",
          "workstation": "U4030"
        },
        "tags": [
          "U4",
          "U4030",
          "U4030"
        ],
        "coord": [
          5,
          17
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4030"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4040",
          "workstation": "U4040"
        },
        "tags": [
          "U4",
          "U4040",
          "U4040"
        ],
        "coord": [
          6,
          18
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4040"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4040",
          "workstation": "U4040"
        },
        "tags": [
          "U4",
          "U4040",
          "U4040"
        ],
        "coord": [
          6,
          17
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4040"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3010",
          "workstation": "U3010"
        },
        "tags": [
          "U3",
          "U3010",
          "U3010"
        ],
        "coord": [
          4,
          15
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3010"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3020",
          "workstation": "U3020"
        },
        "tags": [
          "U3",
          "U3020",
          "U3020"
        ],
        "coord": [
          6,
          15
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3020"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4050",
          "workstation": "U4050"
        },
        "tags": [
          "U4",
          "U4050",
          "U4050"
        ],
        "coord": [
          10,
          18
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4050"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4060",
          "workstation": "U4060"
        },
        "tags": [
          "U4",
          "U4060",
          "U4060"
        ],
        "coord": [
          11,
          18
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4060"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4080",
          "workstation": "U4080"
        },
        "tags": [
          "U4",
          "U4080",
          "U4080"
        ],
        "coord": [
          13,
          18
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4080"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4080",
          "workstation": "U4080"
        },
        "tags": [
          "U4",
          "U4080",
          "U4080"
        ],
        "coord": [
          13,
          17
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4080"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4070",
          "workstation": "U4070"
        },
        "tags": [
          "U4",
          "U4070",
          "U4070"
        ],
        "coord": [
          12,
          17
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4070"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4050",
          "workstation": "U4050"
        },
        "tags": [
          "U4",
          "U4050",
          "U4050"
        ],
        "coord": [
          10,
          17
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4050"
          }
        ]
      },
      {
        "custom": {
          "line": "U4",
          "workcenter": "U4060",
          "workstation": "U4060"
        },
        "tags": [
          "U4",
          "U4060",
          "U4060"
        ],
        "coord": [
          11,
          17
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U4060"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3030",
          "workstation": "U3030"
        },
        "tags": [
          "U3",
          "U3030",
          "U3030"
        ],
        "coord": [
          9,
          15
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3030"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3040",
          "workstation": "U3040"
        },
        "tags": [
          "U3",
          "U3040",
          "U3040"
        ],
        "coord": [
          10,
          15
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3040"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3050",
          "workstation": "U3050"
        },
        "tags": [
          "U3",
          "U3050",
          "U3050"
        ],
        "coord": [
          11,
          15
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3050"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3060",
          "workstation": "U3060"
        },
        "tags": [
          "U3",
          "U3060",
          "U3060"
        ],
        "coord": [
          12,
          15
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3060"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3070",
          "workstation": "U3070"
        },
        "tags": [
          "U3",
          "U3070",
          "U3070"
        ],
        "coord": [
          13,
          15
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3070"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3080",
          "workstation": "U3080"
        },
        "tags": [
          "U3",
          "U3080",
          "U3080"
        ],
        "coord": [
          14,
          15
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3080"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3030",
          "workstation": "U3030"
        },
        "tags": [
          "U3",
          "U3030",
          "U3030"
        ],
        "coord": [
          9,
          14
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3030"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3050",
          "workstation": "U3050"
        },
        "tags": [
          "U3",
          "U3050",
          "U3050"
        ],
        "coord": [
          11,
          14
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3050"
          }
        ]
      },
      {
        "custom": {
          "line": "U3",
          "workcenter": "U3080",
          "workstation": "U3080"
        },
        "tags": [
          "U3",
          "U3080",
          "U3080"
        ],
        "coord": [
          14,
          14
        ],
        "layers": [
          "workcenter_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "U3080"
          }
        ]
      },
      {
        "coord": [
          11,
          32
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          13,
          32
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          14,
          32
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          15,
          30
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          29
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          27
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          26
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          23
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          24
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          21
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          20
        ],
        "layers": [
          "road_crossroad_e_s_w"
        ]
      },
      {
        "coord": [
          15,
          18
        ],
        "layers": [
          "road_crossroad_e_s_w"
        ]
      },
      {
        "coord": [
          15,
          17
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          15
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          14
        ],
        "layers": [
          "road_up",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          9,
          34
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "coord": [
          14,
          34
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "coord": [
          11,
          34
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "coord": [
          13,
          34
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "custom": {
          "line": "U1",
          "workcenter": "U1010",
          "workstation": "U1010"
        },
        "tags": [
          "U1",
          "U1010",
          "U1010"
        ],
        "coord": [
          4,
          11
        ],
        "name": [
          {
            "zoom": 1,
            "text": "ME1350A"
          }
        ],
        "layers": [
          "workstation_01",
          "wall_b_l"
        ]
      },
      {
        "custom": {
          "line": "U1",
          "workcenter": "U1020",
          "workstation": "U1020"
        },
        "tags": [
          "U1",
          "U1020",
          "U1020"
        ],
        "coord": [
          4,
          10
        ],
        "name": [
          {
            "zoom": 1,
            "text": "NLX 3000"
          }
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          4,
          9
        ],
        "name": [
          {
            "zoom": 1,
            "text": "NLX 3000Y"
          }
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          4,
          8
        ],
        "name": [
          {
            "zoom": 1,
            "text": "NLX 3000"
          }
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          3,
          9
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          3,
          10
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          3,
          8
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          4,
          6
        ],
        "layers": [
          "workstation_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "ME1332A"
          }
        ]
      },
      {
        "coord": [
          3,
          6
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          3,
          5
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          3,
          4
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          3,
          3
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          3,
          2
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          4,
          5
        ],
        "layers": [
          "workstation_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "NLX 3000"
          }
        ]
      },
      {
        "coord": [
          4,
          4
        ],
        "layers": [
          "workstation_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "NLX 3000"
          }
        ]
      },
      {
        "coord": [
          4,
          3
        ],
        "layers": [
          "workstation_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "NLX 3000"
          }
        ]
      },
      {
        "coord": [
          4,
          2
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          8,
          11
        ],
        "layers": [
          "workstation_01",
          "wall_b_l"
        ]
      },
      {
        "coord": [
          8,
          9
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          7,
          6
        ],
        "name": [
          {
            "zoom": 1,
            "text": "Integrex j-200s"
          }
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          8,
          6
        ],
        "name": [
          {
            "zoom": 1,
            "text": ""
          }
        ],
        "layers": [
          "workcenter_01"
        ]
      },
      {
        "coord": [
          6,
          6
        ],
        "name": [
          {
            "zoom": 1,
            "text": "Integrex j-200s"
          }
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          8,
          4
        ],
        "name": [
          {
            "zoom": 1,
            "text": "CMX 1100Vc"
          }
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          8,
          3
        ],
        "name": [
          {
            "zoom": 1,
            "text": "CMX 1100Vc"
          }
        ],
        "layers": [
          "workstation_01"
        ]
      },
      {
        "coord": [
          10,
          9
        ],
        "layers": [
          "workstation_01",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          11,
          6
        ],
        "layers": [
          "conveyor_01"
        ]
      },
      {
        "coord": [
          11,
          5
        ],
        "name": [
          {
            "zoom": 1,
            "text": "BySprint Fiber3015"
          }
        ],
        "layers": [
          "conveyor_01"
        ]
      },
      {
        "coord": [
          11,
          4
        ],
        "name": [
          {
            "zoom": 1,
            "text": "BySprint Fiber3015"
          }
        ],
        "layers": [
          "conveyor_01"
        ]
      },
      {
        "coord": [
          11,
          3
        ],
        "layers": [
          "conveyor_01"
        ],
        "name": [
          {
            "zoom": 1,
            "text": "BySprint Fiber4020"
          }
        ]
      },
      {
        "coord": [
          11,
          2
        ],
        "layers": [
          "conveyor_01"
        ]
      },
      {
        "coord": [
          10,
          10
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          11
        ],
        "layers": [
          "wall_b_r",
          "wall_b_l"
        ]
      },
      {
        "coord": [
          10,
          8
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          7
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          6
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          5
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          4
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          3
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          10,
          2
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          1,
          1
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          1,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          2,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          3,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          4,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          5,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          6,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          7,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          8,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          9,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          10,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          11,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          12,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          13,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          14,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          15,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          16,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          17,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          18,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          19,
          12
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          5,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          6,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          7,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          8,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          9,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          10,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          1,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          2,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          3,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          4,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          5,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          6,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          7,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          8,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          9,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          10,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          11,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          12,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          13,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          14,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          15,
          35
        ],
        "layers": [
          "wall_b_r",
          "wall_b_l"
        ]
      },
      {
        "coord": [
          16,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          17,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          18,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          19,
          35
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          15,
          34
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          33
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          15,
          32
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          35
        ],
        "layers": [
          "wall_b_r",
          "wall_b_l"
        ]
      },
      {
        "coord": [
          20,
          34
        ],
        "layers": [
          "warehouse_big",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          33
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          32
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          31
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          30
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          29
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          28
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          27
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          26
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          25
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          24
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          23
        ],
        "layers": [
          "finished_goods_big",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          22
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          21
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          20
        ],
        "layers": [
          "finished_goods_big",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          19
        ],
        "layers": [
          "finished_goods_big",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          18
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          17
        ],
        "layers": [
          "finished_goods_big",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          16
        ],
        "layers": [
          "finished_goods_big",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          15
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          14
        ],
        "layers": [
          "finished_goods_big",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          13
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          12
        ],
        "layers": [
          "wall_b_r",
          "wall_b_l"
        ]
      },
      {
        "coord": [
          20,
          11
        ],
        "layers": [
          "wall_b_l",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          10
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          9
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          8
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          7
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          6
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          5
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          4
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          3
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          2
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          1
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          20,
          0
        ],
        "layers": [
          "wall_u_r",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          1,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          2,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          3,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          5,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          6,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          9,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          11,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          12,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          13,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          14,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          15,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          16,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          17,
          11
        ],
        "layers": [
          "wall_b_r",
          "wall_b_l"
        ]
      },
      {
        "coord": [
          17,
          10
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          17,
          9
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          17,
          8
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          17,
          7
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          17,
          6
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          17,
          5
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          17,
          4
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          17,
          3
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          17,
          2
        ],
        "layers": [
          "wall_b_r"
        ]
      },
      {
        "coord": [
          17,
          1
        ],
        "layers": [
          "wall_b_l",
          "wall_b_r"
        ]
      },
      {
        "coord": [
          18,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          19,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          11,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          13,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          15,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          14,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          3,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          4,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          12,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          16,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          2,
          1
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          7,
          11
        ],
        "layers": [
          "wall_b_l"
        ]
      },
      {
        "coord": [
          16,
          20
        ],
        "layers": [
          "road_crossroad_north"
        ]
      },
      {
        "coord": [
          16,
          18
        ],
        "layers": [
          "road_crossroad_west"
        ]
      },
      {
        "coord": [
          16,
          19
        ],
        "layers": [
          "road_up"
        ]
      },
      {
        "coord": [
          17,
          19
        ],
        "layers": [
          "workcenter_01"
        ]
      },
      {
        "coord": [
          17,
          17
        ],
        "layers": [
          "workcenter_01"
        ]
      },
      {
        "coord": [
          17,
          14
        ],
        "layers": [
          "workcenter_01"
        ]
      },
      {
        "coord": [
          17,
          15
        ],
        "layers": [
          "workcenter_01"
        ]
      },
      {
        "coord": [
          19,
          14
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "coord": [
          19,
          16
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "coord": [
          19,
          19
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "coord": [
          17,
          23
        ],
        "layers": [
          "workcenter_01"
        ]
      },
      {
        "coord": [
          19,
          23
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "coord": [
          19,
          20
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "coord": [
          19,
          17
        ],
        "layers": [
          "finished_goods_big"
        ]
      },
      {
        "coord": [
          17,
          27
        ],
        "layers": [
          "workcenter_01"
        ]
      },
      {
        "coord": [
          17,
          31
        ],
        "layers": [
          "workcenter_01"
        ]
      },
      {
        "coord": [
          17,
          32
        ],
        "layers": [
          "workcenter_01"
        ]
      },
      {
        "coord": [
          17,
          34
        ],
        "layers": [
          "warehouse_big"
        ]
      },
      {
        "coord": [
          19,
          24
        ],
        "layers": [
          "finished_goods_small"
        ]
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

  loaded(ctrl: CanvasControl) {
    console.log(ctrl);
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
