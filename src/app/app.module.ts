import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { SliderModule } from 'ngx-slider';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DraggableModule } from './draggable/draggable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DraggableModule,
    NgxGalleryModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
