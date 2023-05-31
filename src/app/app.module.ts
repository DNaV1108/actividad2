import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Apartado2Component } from './apartado2/apartado2.component';
import { Apartado3Component } from './apartado3/apartado3.component';

@NgModule({
  declarations: [
    AppComponent,
    Apartado2Component,
    Apartado3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
