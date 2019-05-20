import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCanvasIsomapModule } from 'projects/ngx-canvas-isomap/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCanvasIsomapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
