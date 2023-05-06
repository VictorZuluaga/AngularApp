import { Component, OnChanges, OnInit, SimpleChanges, ɵɵNgOnChangesFeature } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class LoginComponent implements OnInit, OnChanges {

  public user?: Observable<User | null>

  constructor(private Route: ActivatedRoute, private Users: UserServices, private validatorService: FormsValidationService, private router: Router) { }


  ngOnChanges(changes: SimpleChanges): void {
    const email: any = document.querySelector("#email");
    const password: any = document.querySelector("#password");

    email.setCustomValidity("")
    password.setCustomValidity("")
    email.checkValidity()
    password.checkValidity()
  }


  ngOnInit(): void {
    this.Route.data.subscribe(c => console.log(c[ "id" ]))
  }

  email: string = ""
  password: string = ""
  errorMsg: string = ""




  btnHandler: () => void = () => {

    this.errorMsg = ""
    const email: any = document.querySelector("#email");
    const password: any = document.querySelector("#password");

    email.setCustomValidity("")
    password.setCustomValidity("")

    if (!this.validatorService.isEmail(this.email)) {
      email.setCustomValidity("Introduzca un email válido")
      email.reportValidity()
      return
    }
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


    this.Users.login(this.email, this.password)
    this.router.navigate([ "" ]);
  }
}