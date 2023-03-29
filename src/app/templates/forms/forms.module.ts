import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.page';
import { FormsRoutingModule } from './forms-routing.module';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
