import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../forms.css', './login.component.css' ]
})
export class LoginComponent implements OnInit {
  constructor(private Route: ActivatedRoute) { }


  ngOnInit(): void {
    this.Route.data.subscribe(c => console.log(c[ "id" ]))
  }

  email: string = ""
  password: string = ""
  showError: boolean = false



  btnHandler: () => void = () => console.log(`email: ${this.email}, password: ${this.password}`, event?.target)
}