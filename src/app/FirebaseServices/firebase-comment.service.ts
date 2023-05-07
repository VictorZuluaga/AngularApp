import { Injectable } from "@angular/core";
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { FirestoreService } from "../services/dbServices/FirebaseServices/firestore.service";
import { Observable } from "rxjs";
import { AsyncToolsService } from "../services/async-tools.service";
import { UserServices } from "../services/dbServices/Users/user-services.service";
import { User } from "../models/User.schema";

@Injectable({
    providedIn: 'root'
})

export default class FirebaseCommentService {

    private user: Observable<User | null>
    private defaultImage: string = "https://firebasestorage.googleapis.com/v0/b/noticierodb-293b3.appspot.com/o/assets%2Ficons%2Ficono.png?alt=media&token=25d185f4-d5e8-4766-89c3-ce2c83e11525"

    constructor(private fss: FirestoreService, private at: AsyncToolsService, private Users: UserServices) {
        this.user = this.Users.loggeduser()
    }

    async saveNewComment(articleId: string, comment: string) {

        //de momento se hace sobre article en un futuro se necesitará una id del articulo concreto por parametros

        this.user.subscribe(async user => {

            const db_ref_comments = doc(collection(this.fss.db, 'Comments'), articleId);
            const commentsSnapshot = await getDoc(db_ref_comments);
            const comentarios = commentsSnapshot.get('comentarios');

            const nuevosDatos = {
                nombre: user?.name || 'anonymous',
                imagen: user?.image || this.defaultImage,
                contenido: comment
            };

            comentarios.push(nuevosDatos);
            await updateDoc(db_ref_comments, { comentarios });
        }).unsubscribe()

    }

    getComments(articleId: string): Observable<any | null> {

        return this.at.getSnapshotObservable(doc(this.fss.db, "Comments", articleId))
    }

}