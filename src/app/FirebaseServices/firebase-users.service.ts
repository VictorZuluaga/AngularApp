import { Injectable } from '@angular/core';
import { Users } from '../models/Users.model';
import { User } from '../models/User.schema';
import db from './firebase.service.config'
import { DocumentReference, addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore/lite'

@Injectable({
  providedIn: 'root'
})
export default class FirebaseUserService implements Users {

  constructor() {

  }
  findById(id: string): User {
    throw new Error('Method not implemented.');
  }
  add(algo: User): Promise<DocumentReference> {
    const user = new User("", "Pepe", "", "", "", "", "", false)
    return addDoc(collection(db, "Users"), { ...user })
  }
}
