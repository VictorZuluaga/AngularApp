import { Component } from '@angular/core';
import { FormsValidationService } from '../services/forms-validation.service';
import { UserServices } from 'src/app/services/dbServices/Users/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: [ '../forms.css',
    './subscribe-form.component.css' ],
  providers: [ FormsValidationService ]
})
export class SubscribeFormComponent {
  constructor(protected validatorService: FormsValidationService, private Users: UserServices, private router: Router) {
    this.Users.loggeduser().subscribe(us => (!us && this.router.navigate([ "auth", "login" ])) || us?.subscription && this.router.navigate([ "" ]))
  }
  nombre: string = "";
  apellidos: string = "";
  pais: string = "";
  provincia: string = "";
  errorMsg: string = "";

  pagarHandler: () => void = () => {
    this.errorMsg = ""
    const nombreElement: any = document.querySelector("#name");
    if (nombreElement.reportValidity() === false) return;
    const apellidosElement: any = document.querySelector("#lastname");
    if (apellidosElement.reportValidity() === false) return;
    const paisElement: any = document.querySelector("#country");
    if (paisElement.reportValidity() === false) return;
    const provinciaElement: any = document.querySelector("#province");
    if (provinciaElement.reportValidity() === false) return;
    const radioButtons: any = document.getElementsByName("pay-method");
    radioButtons.forEach((radioButton: any) => {
      if (radioButton.reportValidity() == false) return;
    });

    // TODO: llamada a firebase

    this.Users.loggeduser().subscribe(us => this.Users.update(us?.id as string,
      { name: this.nombre, lastName: this.apellidos, country: this.pais, province: this.provincia, subscription: true }))

    this.router.navigate([ "" ])
  }
}
