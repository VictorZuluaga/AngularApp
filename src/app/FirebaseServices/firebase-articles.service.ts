import { collection, doc, getDoc } from 'firebase/firestore'
import { Injectable } from "@angular/core";
import { FirestoreService } from '../services/dbServices/FirebaseServices/firestore.service';
import { UserServices } from '../services/dbServices/Users/user-services.service';
import { Observable } from 'rxjs';
import { User } from '../models/User.schema';


@Injectable({
    providedIn: 'root'
})

export default class FirebaseArticleService {

    constructor(private fss: FirestoreService) {
    }

    async loadData_article(articulo: string): Promise<string> {

        //Accedo a la base de datos
        const article = doc(collection(this.fss.db, 'Articles'), articulo);
        const articleSnapshot = await getDoc(article);

        //Compruebo su existencia
        if (articleSnapshot.exists()) {
            console.log("El documento existe!");
        } else {
            console.log('El documento no existe.');
        }

        return JSON.stringify(articleSnapshot.data());
    }

    async loadData_Most_Viewed(): Promise<string[]> {

        //Accedo a la base de datos
        const most_viewed_Ref = doc(collection(this.fss.db, 'Articles'), 'articulos_mas_vistos');
        const most_viewedSnapshot = await getDoc(most_viewed_Ref);

        //Compruebo su existencia
        if (most_viewedSnapshot.exists()) {
            console.log("El documento existe!");
        } else {
            console.log('El documento no existe.');
        }

        const most_viewed = most_viewedSnapshot.get('resumen_articulos_mas_vistos');
        return most_viewed;
    }

    async loadData_Related_Articles(): Promise<string[]> {

        //Accedo a la base de datos
        const related_articles_Ref = doc(collection(this.fss.db, 'Articles'), 'articulos_relacionados');
        const related_articlesSnapshot = await getDoc(related_articles_Ref);

        //Compruebo su existencia
        if (related_articlesSnapshot.exists()) {
            console.log("El documento existe!");
        } else {
            console.log('El documento no existe.');
        }

        const related_articles = related_articlesSnapshot.get('resumen_articulos_relacionados');
        return related_articles;
    }

}