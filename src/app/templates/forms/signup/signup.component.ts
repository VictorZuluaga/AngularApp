import { Component } from '@angular/core';
import { FormsValidationService } from '../services/forms-validation.service';
import { UserServices } from 'src/app/services/dbServices/Users/user-services.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ '../forms.css', './signup.component.css' ],
  providers: []
})
export class SignupComponent {

  constructor(private validatorService: FormsValidationService, private Users: UserServices) { }

  email: string = ""
  password: string = ""
  repeat_password: string = ""
  errorMsg: string = ""

  image?: string

  btnHandler: () => void = () => {
    this.errorMsg = ""
    const email: any = document.querySelector("#email");
    if (email.reportValidity() === false) return;
    const password: any = document.querySelector("#password");
    if (this.password.length === 0) {
      password.setCustomValidity("Es necesario escribir una contraseña.");
    }
    else if (!this.validatorService.isValidPassword(this.password)) {
      password.setCustomValidity("La contraseña debe tener un mínimo de 6 caracteres.");
    } else {
      password.setCustomValidity("");
    }
    if (!password.reportValidity()) return;
    const repeat_password: any = document.querySelector("#repeat-password");
    if (repeat_password.reportValidity() === false) return;
    if (this.password !== this.repeat_password) {
      this.errorMsg = "Las contraseñas no coinciden"
      return
    }
    // TODO: llamada a Firebase
    console.log("Todo ok, llamada a firebase");
    console.log(this.image)
    this.Users.create({ email: this.email, password: this.password, image: this.image })?.
      subscribe(us => this.Users.login(us.email, us.password))
  }

  imageSelected(event: any) {
    console.log(event)
    this.image = event
  }
}
