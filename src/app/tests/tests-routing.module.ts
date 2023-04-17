import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: "/:data",
    component: TestComponent,
    data: { data: "Dato mediante enrutado" }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TestsRoutingModule { }
