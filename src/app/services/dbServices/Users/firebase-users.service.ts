import { Injectable } from '@angular/core';
import { Users } from '../../../models/Users.model';
import { User } from '../../../models/User.schema';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where, } from 'firebase/firestore'
import { FirestoreService } from '../FirebaseServices/firestore.service';
import { AsyncToolsService } from '../../async-tools.service';
import { Observable, from, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class FirebaseUserService implements Users {
  private collection: string = "Users"
  constructor(private fss: FirestoreService, private atools: AsyncToolsService) { }


  create(user: User): Observable<User> {
    return from(addDoc(collection(this.fss.db, this.collection), user)).pipe(switchMap(ref => this.atools.getSnapshotObservable(ref)))
  }


  findById(id: string): Observable<User> {
    return this.atools.getSnapshotObservable(doc(this.fss.db, this.collection, id))
  }
  findByEmail(email: string): Observable<User> {
    return this.atools.getSnapshotObservable(query(collection(this.fss.db, this.collection), where("email", "==", email)), true)
  }
  update(id: string, data: {}): Promise<boolean> {
    return updateDoc(doc(this.fss.db, this.collection, id), { ...data }).then(() => true).catch(() => false)
  }
  delete(id: string): Promise<boolean> | null {
    if (!id) return null
    try { return deleteDoc(doc(this.fss.db, this.collection, id)).then(() => true).catch(() => false) }
    catch { return null }
  }

}
