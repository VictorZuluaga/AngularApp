import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { FormsRoutingModule } from './templates/forms/forms-routing.module';
import { SubscribeComponent } from './templates/subscribe/subscribe.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { PaginaArticleComponent } from './templates/pagina-article/pagina-article.component';
import { ArticleComponent } from './templates/pagina-article/article/article.component';
import { CajaComentariosComponent } from './templates/pagina-article/caja-comentarios/caja-comentarios.component';
import { PolicyModule } from './templates/policy/policy.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainHomeModule } from './templates/main-home/main-home.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SubscribeComponent,
    AppComponent,
    HeaderComponent,
    PaginaArticleComponent,
    ArticleComponent,
    CajaComentariosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    PolicyModule,
    MainHomeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
