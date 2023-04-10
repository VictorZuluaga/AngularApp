import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { AvisoLegalComponent } from './templates/aviso-legal/aviso-legal.component';
import { ContactoComponent } from './templates/contacto/contacto.component';
import { PoliticaDeCookiesComponent } from './templates/politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './templates/politica-de-privacidad/politica-de-privacidad.component';
import { RouterModule} from '@angular/router';
import { SignupComponent } from './templates/forms/signup/signup.component';
import { FormsRoutingModule } from './templates/forms/forms-routing.module';
import { SubscribeComponent } from './templates/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AvisoLegalComponent,
    ContactoComponent,
    PoliticaDeCookiesComponent,
    PoliticaDePrivacidadComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
