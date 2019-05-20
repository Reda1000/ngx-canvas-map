export enum ORRIENTATION {'WEST', 'NORTH', 'EAST', 'SOUTH'};

export interface CanvasSettings {
    scale: number;
    offset: number[];
    border: number[];
    parentSize: number[];
    tileSize: number[];
}