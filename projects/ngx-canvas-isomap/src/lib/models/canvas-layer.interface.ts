import { CanvasSettings } from './canvas-settings.interface';
import { CanvasConfig } from './canvas-config.interface';
import { Map, MapConfig } from './map.interface';

export interface CanvasLayer {
    el: HTMLCanvasElement;
    config: CanvasConfig;
    set: CanvasSettings;
    map: MapConfig;
}

export interface CanvasShadowLayer extends CanvasLayer {
    map: Map<any>;
    drawAction: 'NONE' | 'TEXT' | 'BACKGROUND' | 'IMAGES' | 'ANIMATIONS';
}