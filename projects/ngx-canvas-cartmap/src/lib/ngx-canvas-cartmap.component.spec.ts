import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCanvasCartmapComponent } from './ngx-canvas-cartmap.component';

describe('NgxCanvasCartmapComponent', () => {
  let component: NgxCanvasCartmapComponent;
  let fixture: ComponentFixture<NgxCanvasCartmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCanvasCartmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCanvasCartmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
