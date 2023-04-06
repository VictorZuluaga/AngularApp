import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { MainHomeComponent } from './templates/main-home/main-home.component';
import { ArticulosPrincipalesComponent } from './templates/main-home/articulos-principales/articulos-principales.component';
import { ArticulosSecundariosComponent } from './templates/main-home/articulos-secundarios/articulos-secundarios.component';
import { ListaVideosComponent } from './templates/main-home/lista-videos/lista-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHomeComponent,
    ArticulosPrincipalesComponent,
    ArticulosSecundariosComponent,
    ListaVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
