import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCanvasIsomapComponent } from './ngx-canvas-isomap.component';

describe('NgxCanvasIsomapComponent', () => {
  let component: NgxCanvasIsomapComponent;
  let fixture: ComponentFixture<NgxCanvasIsomapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCanvasIsomapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCanvasIsomapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
