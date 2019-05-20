import { TestBed } from '@angular/core/testing';

import { NgxCanvasCartmapService } from './ngx-canvas-cartmap.service';

describe('NgxCanvasCartmapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCanvasCartmapService = TestBed.get(NgxCanvasCartmapService);
    expect(service).toBeTruthy();
  });
});
