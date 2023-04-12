import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticaDeCookiesComponent } from './politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './politica-de-privacidad/politica-de-privacidad.component';
import { FormsRoutingModule } from './policy-routing-module';



@NgModule({
  declarations: [
    AvisoLegalComponent,
    ContactoComponent,
    PoliticaDeCookiesComponent,
    PoliticaDePrivacidadComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class PolicyModule { }
