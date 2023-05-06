import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsValidationService {

  constructor() { }

  isEmail: (email: string) => boolean = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(email)
  }

  isValidPassword: (password: string) => boolean = (password) => {
    return password.length >= 6;
  }

}
