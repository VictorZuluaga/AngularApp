import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent, data: { id: "Todo va bien" }
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "subscribe-form",
    component: SubscribeFormComponent
  }
  
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FormsRoutingModule { }
