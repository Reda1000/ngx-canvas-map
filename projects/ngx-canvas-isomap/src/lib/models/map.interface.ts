export interface Tile<T> {
    coord: number[];
    name?: {zoom: number, text: string}[];
    layers?: string[];
    tags?: string[];
    custom?: T;
}

export interface MapConfig {
    size: number[];
}

export interface Map<T> extends MapConfig {
    tiles: Tile<T>[];
}
