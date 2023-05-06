import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsValidationService } from '../services/forms-validation.service';
import { User } from 'src/app/models/User.schema';
import { Users } from 'src/app/services/dbServices/Users/Users.model';
import { Observable } from 'rxjs';
import { UserServices } from 'src/app/services/dbServices/Users/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../forms.css', './login.component.css' ],
  providers: []
})
export class LoginComponent implements OnInit {

  public user?: Observable<User | null>

  constructor(private Route: ActivatedRoute, private Users: UserServices, private validatorService: FormsValidationService) { }


  ngOnInit(): void {
    this.Route.data.subscribe(c => console.log(c[ "id" ]))
  }

  email: string = ""
  password: string = ""
  errorMsg: string = ""

  btnHandler: () => void = () => {
    this.errorMsg = ""
    const email: any = document.querySelector("#email");
    if (!email.reportValidity()) return;
    const password: any = document.querySelector("#password");
    if (this.password.length === 0) {
      password.setCustomValidity("Es necesario escribir una contraseña.")
    }
    else if (!this.validatorService.isValidPassword(this.password)) {
      password.setCustomValidity("La contraseña debe tener un mínimo de 6 caracteres.");
    }
    else {
      password.setCustomValidity("");
    }
    if (!password.reportValidity()) return;
    // TODO: llamada a firebase
  }
}