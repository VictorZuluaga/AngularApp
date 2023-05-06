import { Injectable } from "@angular/core";
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { FirestoreService } from "../services/dbServices/FirebaseServices/firestore.service";
import { Observable } from "rxjs";
import { AsyncToolsService } from "../services/async-tools.service";

@Injectable({
    providedIn: 'root'
})

export default class FirebaseCommentService {

    constructor(private fss: FirestoreService, private at: AsyncToolsService) { }

    async saveNewComment(comment: string) {
        //de momento se hace sobre article en un futuro se necesitará una id del articulo concreto por parametros
        const db_ref_comments = doc(collection(this.fss.db, 'Comments'), 'article');
        const commentsSnapshot = await getDoc(db_ref_comments);
        const comentarios = commentsSnapshot.get('comentarios');

        const nuevosDatos = {
            nombre: 'anonymous',
            imagen: '../../../../assets/icons/icono.png',
            contenido: comment
        };

        comentarios.push(nuevosDatos);
        await updateDoc(db_ref_comments, { comentarios });
    }

    getComments(articleId: string): Observable<any | null> {

        return this.at.getSnapshotObservable(doc(this.fss.db, "Comments", articleId))
    }

}