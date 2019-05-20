export interface CanvasConfig{
//    border: number[];
    quality: number;
    zoomStepTap: number;
    zoomStepScrollDebouncer: number;
    maxZoom: number;
    maxSize: number;
    maxOffset: number;
    topOffset: number;
    topOffsetCenterCalcModification: boolean;
    refresh: 'automatic' | number;
    style: {
        map: {
            backgroundColor: string;
            borderColor?: string;
            borderWidth?: number;
        },
        tile: {
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            fontSize: number;
            fontFamily: string;
            fontColor: string;
            textAlign: 'left' | 'center' | 'right';
        },
        selectedTile: {
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            fontSize: number;
            fontFamily: string;
            fontColor: string;
            textAlign: 'left' | 'center' | 'right';
        }
    },
    cheat: {
        imgTileHeightAdjustment: number;
        imgTileHeightOffsetAdjustment: number;
    }
}