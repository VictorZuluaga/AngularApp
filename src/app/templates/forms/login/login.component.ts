import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsValidationService } from '../services/forms-validation.service';
import { User } from 'src/app/models/User.schema';
import FirebaseUserService from 'src/app/FirebaseServices/firebase-users.service';
import { Users } from 'src/app/models/Users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../forms.css', './login.component.css' ],
  providers: [ FormsValidationService, FirebaseUserService ]
})
export class LoginComponent implements OnInit {

  public user: Promise<User> | undefined
  private Users: Users

  constructor(private Route: ActivatedRoute, Users: FirebaseUserService) {
    this.Users = Users
  }


  ngOnInit(): void {
    this.Route.data.subscribe(c => console.log(c[ "id" ]))
  }

  email: string = ""
  password: string = ""
  showError: boolean = false

  btnHandler: () => void = () => console.log(`email: ${this.email}, password: ${this.password}`, event?.target)


  createUser: () => void = () => {
    this.user = this.Users.create({ email: "admin@admin.com", password: "admin", name: "Nombre original" })
    this.user.then(x => console.log(x.id))
  }

  findById: () => void = async () => {
    this.user = this.Users.findById((await this.user)?.id as string)
    this.user.then(x => console.log(x.id))
  }

  findByEmail: () => void = async () => {
    this.user = this.Users.findByEmail("admin@admin.com")
    this.user.then(x => console.log(x.id))
  }

  update: () => void = async () => {
    const newUser = Object.assign({}, await this.user)
    newUser.name = "Nuevo nombre"
    this.Users.update((await this.user)?.id as string, { ...newUser }).then(x => console.log(x))
  }

  delete: () => void = async () => {
    this.Users.delete((await this.user)?.id as string).then(x => console.log(x))
  }
}