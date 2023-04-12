import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticaDeCookiesComponent } from './politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './politica-de-privacidad/politica-de-privacidad.component';

const routes: Routes = [  
  {
    path: "aviso-legal",
    component: AvisoLegalComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  },
  {
    path: "politica-de-cookies",
    component: PoliticaDeCookiesComponent
  },
  {
    path: "politica-de-privacidad",
    component: PoliticaDePrivacidadComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FormsRoutingModule { }
