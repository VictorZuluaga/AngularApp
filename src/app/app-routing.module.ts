import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeComponent } from './templates/subscribe/subscribe.component';
import { MainHomeComponent } from './templates/main-home/main-home.component';
import { PaginaArticleComponent } from './templates/pagina-article/pagina-article.component';


const routes: Routes = [
  {
    path: '', component: MainHomeComponent
  },
  {
    path: 'article', component: PaginaArticleComponent
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
    path: 'subscribe', component: SubscribeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }