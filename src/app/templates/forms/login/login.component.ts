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
    if(!email.reportValidity()) return;
    const password: any = document.querySelector("#password");    
    if(this.password.length === 0){
      password.setCustomValidity("Es necesario escribir una contraseña.")
    }
    else if(!this.validatorService.isValidPassword(this.password)){
      password.setCustomValidity("La contraseña debe tener un mínimo de 6 caracteres.");      
    } 
    else{
      password.setCustomValidity("");
    }
    if(!password.reportValidity()) return;
    // TODO: llamada a firebase
  }
}