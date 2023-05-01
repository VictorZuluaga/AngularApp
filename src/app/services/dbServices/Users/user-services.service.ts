import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/Users.model';
import FirebaseUserService from './firebase-users.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.schema';

@Injectable({
  providedIn: 'root'
})
export class UserServices implements Users {

  constructor(private service: FirebaseUserService) {
  }
  create(user: User): Observable<User> {
    return this.service.create(user)
  }
  findById(id: string): Observable<User> {
    return this.service.findById(id)
  }
  findByEmail(email: string): Observable<User> {
    return this.service.findByEmail(email)
  }
  update(id: string, data: {}): Promise<boolean> {
    return this.service.update(id, data)
  }
  delete(id: string): Promise<boolean> | null {
    return this.service.delete(id)
  }
}
