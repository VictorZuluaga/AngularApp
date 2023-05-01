import { Injectable } from '@angular/core';
import { DocumentData, DocumentReference, DocumentSnapshot, QueryDocumentSnapshot, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { User } from '../models/User.schema';

@Injectable({
  providedIn: 'root'
})
export class AsyncToolsService {

  constructor() { }

  getSnapshotPromise(doc: any, one: boolean = false): Promise<any> {
    return new Promise((res, rej) => {
      onSnapshot(doc, (snap: QuerySnapshot | DocumentSnapshot) => {

        let data: User | User[]

        if (!!(<any>snap).data) {

          data = (<DocumentSnapshot>snap).data() as User
          data.id = (<DocumentSnapshot>snap).id

        } else {

          data = []
          let tmp: User

          (<QuerySnapshot>snap).forEach((x: QueryDocumentSnapshot) => {
            tmp = x.data() as User;
            tmp.id = x.id;
            (<User[]>data).push(tmp)
          })

          data = one ? (data.length > 0 ? data[ 0 ] : data) : data
        }

        res(data)
      }, (err: any) => rej(err))
    })
  }
}
