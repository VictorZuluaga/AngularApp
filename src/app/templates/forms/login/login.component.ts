import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../forms.css', './login.component.css' ]
})
export class LoginComponent {
  constructor() { }

  email: String = ""
  password: String = ""
  showError: Boolean = true
}
