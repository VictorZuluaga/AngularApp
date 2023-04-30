import { Component } from '@angular/core';
import { FormsValidationService } from '../services/forms-validation.service';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['../forms.css',
    './subscribe-form.component.css'],
  providers: [FormsValidationService]
})
export class SubscribeFormComponent {
  constructor(protected validatorService: FormsValidationService) { }
  nombre: string = "";
  apellidos: string = "";
  pais: string = "";
  provincia: string = "";
  errorMsg: string = "";

  pagarHandler: () => void = () => {
    this.errorMsg = ""  
    const nombreElement: any = document.querySelector("#name");
    if(nombreElement.reportValidity() === false) return;
    const apellidosElement: any = document.querySelector("#lastname");
    if(apellidosElement.reportValidity() === false) return;
    const paisElement: any = document.querySelector("#country");
    if(paisElement.reportValidity() === false) return;
    const provinciaElement: any = document.querySelector("#province");
    if(provinciaElement.reportValidity() === false) return;
    const radioButtons: any = document.getElementsByName("pay-method");
    radioButtons.forEach((radioButton: any) => {
      if(radioButton.reportValidity() == false) return;
    });
    
    // TODO: llamada a firebase
  }
}
