import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TestsRoutingModule } from './tests-routing.module';
import { CalledComponent } from './called/called.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TestComponent,
    CalledComponent
  ],
  imports: [
    CommonModule, TestsRoutingModule, FormsModule
  ]
})
export class TestsModule { }
