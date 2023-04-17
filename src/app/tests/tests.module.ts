import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TestsRoutingModule } from './tests-routing.module';
import { CalledComponent } from './called/called.component';



@NgModule({
  declarations: [
    TestComponent,
    CalledComponent
  ],
  imports: [
    CommonModule, TestsRoutingModule
  ]
})
export class TestsModule { }
