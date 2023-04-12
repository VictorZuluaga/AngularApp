import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule } from '@angular/forms'
import { SignupComponent } from './signup/signup.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';



@NgModule({
  declarations: [ LoginComponent, SignupComponent, SubscribeFormComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule
  ]
})
export class CFormsModule { }
