import { Component } from '@angular/core';
import { FormsValidationService } from '../services/forms-validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../forms.css', './signup.component.css'],
  providers: [FormsValidationService]
})
export class SignupComponent {  
  constructor(protected validatorService: FormsValidationService) { }
  
  email: string = ""
  password: String = ""
  repeat_password: String = ""
  showError: Boolean = false


  btnHandler: () => void = () => console.log(`email: ${this.email}, password: ${this.password} password-repeat: ${this.repeat_password}`, event?.target)      
}
