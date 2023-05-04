import { Injectable } from '@angular/core';
import { Users } from './Users.model';
import { User } from '../../../models/User.schema';
import { addDoc, collection, deleteDoc, doc, query, updateDoc, where, } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail, onAuthStateChanged } from 'firebase/auth'
import { FirestoreService } from '../FirebaseServices/firestore.service';
import { AsyncToolsService } from '../../async-tools.service';
import { BehaviorSubject, Observable, Observer, filter, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class FirebaseUserService implements Users {
  private collection: string = "Users"
  private _loggedUser_!: Observable<User | null>
  private logObs: BehaviorSubject<User | null> | null = null

  constructor(private fss: FirestoreService, private atools: AsyncToolsService) {

    onAuthStateChanged(this.fss.auth, user => {
      user && this.findByEmail(user?.email as string)?.subscribe(x => this.logObs!.next(x))
    })

    this.logObs = new BehaviorSubject<User | null>(null)
    this._loggedUser_ = this.logObs.asObservable()
  }

  create(user: User): Observable<User> | null {

    return from(fetchSignInMethodsForEmail(this.fss.auth, user.email)
      .then(x => {
        if (x.length == 0) return createUserWithEmailAndPassword(this.fss.auth, user.email, user.password)
        throw new Error("")
      })
      .then(() => addDoc(collection(this.fss.db, this.collection), user))
      .catch(err => null))
      .pipe(filter(x => x !== null)).pipe(switchMap(ref => this.atools.getSnapshotObservable(ref)))
  }

  findById(id: string): Observable<User> | null {
    return this.atools.getSnapshotObservable(doc(this.fss.db, this.collection, id)) || null
  }

  findByEmail(email: string): Observable<User> | null {
    return this.atools.getSnapshotObservable(query(collection(this.fss.db, this.collection), where("email", "==", email)), true)
  }

  update(id: string, data: {}): Promise<boolean> {
    return updateDoc(doc(this.fss.db, this.collection, id), { ...data }).then(() => true).catch(() => false)
  }

  delete(id: string,): Promise<boolean> | null {
    if (!id) return null
    try {
      return deleteDoc(doc(this.fss.db, this.collection, id))
        .then(() => this.fss.auth.currentUser?.delete())
        .then(x => !!x).catch(() => false)
    }
    catch { return null }
  }

  login(email: string, password: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.fss.auth, email, password)
      .then(us => this.findByEmail(us?.user?.email as string))
      .then(() => true)
      .catch(() => false)
  }

  logout(): void {
    this.fss.auth.signOut()
    this.updateLog(null)
  }

  loggeduser(): Observable<User | null> {
    return this._loggedUser_
  }

  // *=> aux

  private updateLog(us: User | null): void {
    this.logObs!.next(us)
  }
}
