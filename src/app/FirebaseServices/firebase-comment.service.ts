import { Injectable } from "@angular/core";
import {db} from "./firebase.service.config";
import {collection, doc, getDoc, updateDoc } from 'firebase/firestore/lite'

@Injectable({
    providedIn: 'root'
})

export default class FirebaseCommentService {

    async saveNewComment(comment: string) {
        //de momento se hace sobre article en un futuro se necesitará una id del articulo concreto por parametros
        const db_ref_comments = doc(collection(db, 'Articles'), 'article');
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
}