import db from "./firebase-users-service.config";
import { Article } from "../models/Articles/Article.schema";
import { Articles } from "../models/Articles/Articles.model";
import { DocumentReference, addDoc, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore/lite'

export default class FirebaseArticleService implements Articles {


    async loadData(): Promise<Article> {

        //Accedo a la base de datos
        const articleRef = doc(collection(db, 'Articles'), 'article');
        const articleSnapshot = await getDoc(articleRef);

        //Compruebo su existencia
        if (articleSnapshot.exists()) {
            console.log("El documento existe!");
        } else {
            console.log('El documento no existe.');
        }

        //Carga del registro
        const register = articleSnapshot.data();

        const titulo = register!['titulo'];
        const entrada = register!['entrada'];
        const imagen = register!['imagen'];
        const pie_foto = register!['pie_foto'];
        const datos = register!['datos'];
        const fecha = register!['fecha'];
        const contenido = register!['contenido'];

        return new Article(titulo,entrada,imagen,pie_foto,datos,fecha,contenido);

    }

}