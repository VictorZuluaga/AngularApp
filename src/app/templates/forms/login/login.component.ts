import { Component } from '@angular/core';
import { FormsValidationService } from '../services/forms-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../forms.css', './login.component.css' ],
  providers: [FormsValidationService]
})
export class LoginComponent {
  constructor(protected validatorService: FormsValidationService) { }

  email: string = ""
  password: string = ""
  errorMsg: string = ""

  btnHandler: () => void = () => {
    this.errorMsg = ""  
    const email: any = document.querySelector("#email");
    if(email.reportValidity() === false) return;
    const password: any = document.querySelector("#password");
    if(password.reportValidity() === false) return;
    // TODO: llamada a firebase
  }
}