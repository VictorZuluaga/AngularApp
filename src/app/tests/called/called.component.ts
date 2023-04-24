import { Component } from '@angular/core';

@Component({
  selector: 'app-called',
  templateUrl: './called.component.html',
  styleUrls: [ './called.component.css' ]
})

export class CalledComponent {

  form1: String = ""
  form2: String = ""

  constructor() { }

  form1Update = (e: any) => this.form1 = e.target.value
}