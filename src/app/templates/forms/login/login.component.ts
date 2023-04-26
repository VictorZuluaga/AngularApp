import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsValidationService } from '../services/forms-validation.service';
import { User } from 'src/app/models/User.schema';
import FirebaseUserService from 'src/app/FirebaseServices/firebase-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../forms.css', './login.component.css' ],
  providers: [ FormsValidationService, FirebaseUserService ]
})
export class LoginComponent implements OnInit {
  constructor(private Route: ActivatedRoute, validatorService: FormsValidationService, private Users: FirebaseUserService) { }


  ngOnInit(): void {
    this.Route.data.subscribe(c => console.log(c[ "id" ]))
  }

  email: string = ""
  password: string = ""
  showError: boolean = false

  btnHandler: () => void = () => console.log(`email: ${this.email}, password: ${this.password}`, event?.target)
  createUser: () => void = () => {
    this.Users.add(new User("", "Pepe", "Algui", "", "", "", "", false));

  }
}