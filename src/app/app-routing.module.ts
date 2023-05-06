import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeComponent } from './templates/subscribe/subscribe.component';
import { MainHomeComponent } from './templates/main-home/main-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginaArticleComponent } from './templates/pagina-article/pagina-article.component';
import { UploadImageComponent } from './templates/upload-image/upload-image.component';


const routes: Routes = [
  {
    path: '', component: MainHomeComponent
  },
  {
    path: 'upload', component: UploadImageComponent
  },
  {
    path: 'article/:article', component: PaginaArticleComponent
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