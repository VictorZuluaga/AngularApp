import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AvisoLegalComponent } from './templates/aviso-legal/aviso-legal.component';
import { ContactoComponent } from './templates/contacto/contacto.component';
import { PoliticaDeCookiesComponent } from './templates/politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './templates/politica-de-privacidad/politica-de-privacidad.component';
import { LoginComponent } from './templates/forms/login/login.component';
import { SubscribeComponent } from './templates/subscribe/subscribe.component';
import { MainHomeComponent } from './templates/main-home/main-home.component';


const routes: Routes = [
  {
    path: '', component: MainHomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./templates/forms/cforms.module').then(m => m.CFormsModule),

  },
  {
    path: 'aviso-legal', component: AvisoLegalComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'politica-de-cookies', component: PoliticaDeCookiesComponent
  },
  {
    path: 'politica-de-privacidad', component: PoliticaDePrivacidadComponent
  },
  {
    path: 'subscribe', component: SubscribeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
