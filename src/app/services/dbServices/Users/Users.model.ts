import { DocumentReference } from "firebase/firestore/lite";
import { User } from "../../../models/User.schema";
import { Observable } from "rxjs";

export interface Users {


    // *=> Create
    create(user: User): Observable<User> | null

    // *=> Read
    findById(id: string): Observable<User> | null
    findByEmail(email: string): Observable<User> | null

    // *=> Update
    update(id: string, data: {}): Promise<boolean>

    // *=> Delete
    delete(id: string): Promise<boolean> | null

    // *=> Auth
    login(email: string, password: string): Promise<boolean>
    logout(): void
    loggeduser(): Observable<User | null>

}