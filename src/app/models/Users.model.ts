import { DocumentReference } from "firebase/firestore/lite";
import { User } from "./User.schema";

export interface Users {


    // *=> Create
    create(user: User): Promise<User>

    // *=> Read
    findById(id: string): Promise<User>
    findByEmail(email: string): Promise<User>

    // *=> Update
    update(id: string, data: {}): Promise<boolean>

    // *=> Delete
    delete(id: string): Promise<boolean>

}