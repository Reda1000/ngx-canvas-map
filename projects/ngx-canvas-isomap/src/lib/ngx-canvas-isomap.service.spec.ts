import { TestBed } from '@angular/core/testing';

import { NgxCanvasIsomapService } from './ngx-canvas-isomap.service';

describe('NgxCanvasIsomapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCanvasIsomapService = TestBed.get(NgxCanvasIsomapService);
    expect(service).toBeTruthy();
  });
});
