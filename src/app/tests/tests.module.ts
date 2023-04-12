import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TestsRoutingModule } from './tests-routing.module';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule, TestsRoutingModule
  ]
})
export class TestsModule { }
