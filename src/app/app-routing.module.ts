import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticaDeCookiesComponent } from './politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './politica-de-privacidad/politica-de-privacidad.component';
import { LoginComponent } from './templates/forms/login/login.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./templates/forms/cforms.module').then(m => m.CFormsModule)
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
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
