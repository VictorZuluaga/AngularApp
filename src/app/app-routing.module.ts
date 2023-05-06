import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './templates/main-home/main-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginaArticleComponent } from './templates/pagina-article/pagina-article.component';
import { SubscribeFormComponent } from './templates/forms/subscribe-form/subscribe-form.component';
import { AvisoLegalComponent } from './templates/policy/aviso-legal/aviso-legal.component';
import { ContactoComponent } from './templates/policy/contacto/contacto.component';
import { PoliticaDeCookiesComponent } from './templates/policy/politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './templates/policy/politica-de-privacidad/politica-de-privacidad.component';


const routes: Routes = [
  {
    path: '', component: MainHomeComponent
  },
  {
    path: 'article/:article', component: PaginaArticleComponent
  },
  {
    path: "subscribe-form",
    component: SubscribeFormComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./templates/forms/cforms.module').then(m => m.CFormsModule),
  },
  {
    path: 'policy',
    loadChildren: () => import('./templates/policy/policy.module').then(m => m.PolicyModule)
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
    path: 'tests', loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule)
  },
  {
    path: '**', component: NotFoundComponent
  },
  {
    path: 'test', loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule)
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { } 