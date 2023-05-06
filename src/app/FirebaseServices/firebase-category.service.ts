import { doc, getDoc } from 'firebase/firestore'
import { Injectable } from "@angular/core";
import { FirestoreService } from '../services/dbServices/FirebaseServices/firestore.service';

@Injectable({
    providedIn: 'root'
})

export default class FirebaseCategoryService {

    constructor(private fss: FirestoreService) { }

    async loadData_Main_articles(): Promise<string[]> {

        //Accedo a la base de datos

        const categorySnapshot_ = await getDoc(doc(this.fss.db, "Category", 'Home'));
        const main_article = categorySnapshot_.get('articulos-principales');

        //Compruebo su existencia
        if (categorySnapshot_.exists()) {
            console.log("El documento existe!");
        } else {
            console.log('El documento no existe.');
        }

        return main_article;

    }

    async loadData_Secondary_articles(): Promise<any> {

        //Accedo a la base de datos
        const categorySnapshot_ = await getDoc(doc(this.fss.db, 'Category', 'Home'));
        const secondary_article = categorySnapshot_.get('articulos-secundarios');

        //Compruebo su existencia
        if (categorySnapshot_.exists()) {
            console.log("El documento existe!");
        } else {
            console.log('El documento no existe.');
        }
        return secondary_article;

    }

}