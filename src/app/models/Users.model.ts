import { DocumentReference } from "firebase/firestore/lite";
import { User } from "./User.schema";
import { Observable } from "rxjs";

export interface Users {


    // *=> Create
    create(user: User): Observable<User>

    // *=> Read
    findById(id: string): Observable<User>
    findByEmail(email: string): Observable<User>

    // *=> Update
    update(id: string, data: {}): Promise<boolean>

    // *=> Delete
    delete(id: string): Promise<boolean> | null

}