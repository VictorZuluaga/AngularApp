import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { FormsRoutingModule } from './templates/forms/forms-routing.module';
import { SubscribeComponent } from './templates/subscribe/subscribe.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { MainHomeComponent } from './templates/main-home/main-home.component';
import { ArticulosPrincipalesComponent } from './templates/main-home/articulos-principales/articulos-principales.component';
import { ArticulosSecundariosComponent } from './templates/main-home/articulos-secundarios/articulos-secundarios.component';
import { ListaVideosComponent } from './templates/main-home/lista-videos/lista-videos.component';
import { PaginaArticleComponent } from './templates/pagina-article/pagina-article.component';
import { ArticleComponent } from './templates/pagina-article/article/article.component';
import { CajaComentariosComponent } from './templates/pagina-article/caja-comentarios/caja-comentarios.component';
import { PolicyModule } from './templates/policy/policy.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,    
    SubscribeComponent,
    AppComponent,
    HeaderComponent,
    MainHomeComponent,
    ArticulosPrincipalesComponent,
    ArticulosSecundariosComponent,
    ListaVideosComponent,
    PaginaArticleComponent,
    ArticleComponent,
    CajaComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    PolicyModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
