import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsValidationService } from '../services/forms-validation.service';
import { UserServices } from 'src/app/services/dbServices/Users/user-services.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ '../forms.css', './signup.component.css' ],
  providers: []
})
export class SignupComponent implements OnChanges {

  constructor(private validatorService: FormsValidationService, private Users: UserServices, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    const email: any = document.querySelector("#email");
    const password: any = document.querySelector("#password");
    const repeat_password: any = document.querySelector("#repeat-password");

    email.setCustomValidity("")
    password.setCustomValidity("")
    repeat_password.setCustomValidity("")

    email.checkValidity()
    password.checkValidity()
    repeat_password.checkValidity()
  }

  email: string = ""
  password: string = ""
  repeat_password: string = ""
  errorMsg: string = ""

  image?: string

  btnHandler: () => void = () => {
    const email: any = document.querySelector("#email");
    const password: any = document.querySelector("#password");
    const repeat_password: any = document.querySelector("#repeat-password");

    email.setCustomValidity("")
    password.setCustomValidity("")
    repeat_password.setCustomValidity("")

    email.checkValidity()
    password.checkValidity()
    repeat_password.checkValidity()

    this.errorMsg = ""

    if (!this.validatorService.isEmail(this.email)) {
      email.setCustomValidity("Introduzca un email valido")
      email.reportValidity()
      return
    }
    if (this.password.length === 0) {
      password.setCustomValidity("Es necesario escribir una contraseña.");
      password.reportValidity()
      return
    }
    else if (!this.validatorService.isValidPassword(this.password)) {
      password.setCustomValidity("La contraseña debe tener un mínimo de 6 caracteres.");
      password.reportValidity()
    }

    if (!repeat_password.reportValidity()) return;
    if (this.password !== this.repeat_password) {
      this.errorMsg = "Las contraseñas no coinciden"
      return
    }
    // TODO: llamada a Firebase

    this.Users.create({ email: this.email, password: this.password, image: this.image })
      ?.subscribe(user => this.Users.login(user.email, user.password)
        .then(b => b && this.router.navigate([ "" ])))

    email.setCustomValidity("El email ya esta registrado")
    email.reportValidity()
  }

  imageSelected(event: any) {
    console.log(event)
    this.image = event
  }
}
