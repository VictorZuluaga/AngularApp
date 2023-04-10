import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../forms.css', './signup.component.css']
})
export class SignupComponent {
  constructor() { }

  email: String = ""
  password: String = ""
  repeat_password: String = ""
  showError: Boolean = false

  btnHandler: () => void = () => console.log(`email: ${this.email}, password: ${this.password} password-repeat: ${this.repeat_password}`, event?.target)
}
