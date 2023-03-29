import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    FormsModule
  ]
})
export class CFormsModule { }
