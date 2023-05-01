import { Injectable } from '@angular/core';
import { Users } from '../models/Users.model';
import { User } from '../models/User.schema';
import { addDoc, collection, deleteDoc, doc, query, updateDoc, where } from 'firebase/firestore'
import { FirestoreService } from './firestore.service';
import { AsyncToolsService } from '../services/async-tools.service';

@Injectable({
  providedIn: 'root'
})
export default class FirebaseUserService implements Users {
  private collection: string = "Users"
  constructor(private fss: FirestoreService, private atools: AsyncToolsService) { }


  create(user: User): Promise<User> {
    return addDoc(collection(this.fss.db, this.collection), user).then(doc => this.atools.getSnapshotPromise(doc))
  }


  findById(id: string): Promise<User> {
    return this.atools.getSnapshotPromise(doc(this.fss.db, this.collection, id))
  }
  findByEmail(email: string): Promise<User> {
    return this.atools.getSnapshotPromise(query(collection(this.fss.db, this.collection), where("email", "==", email)), true)
  }
  update(id: string, data: {}): Promise<boolean> {
    return updateDoc(doc(this.fss.db, this.collection, id), { ...data }).then(() => true).catch(() => false)
  }
  delete(id: string): Promise<boolean> {
    return deleteDoc(doc(this.fss.db, this.collection, id)).then(() => true).catch(() => false)
  }

}
