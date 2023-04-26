import { DocumentReference } from "firebase/firestore/lite";
import { User } from "./User.schema";

export interface Users {
    findById(id: string): User;
    //add(user: User): User;
    add(user: User): Promise<DocumentReference>
}