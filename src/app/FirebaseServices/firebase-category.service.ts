import db from "./firebase.service.config";
import { collection, doc, getDoc} from 'firebase/firestore/lite'
import { Injectable } from "@angular/core";
import { ArticulosPrincipalesComponent} from '../templates/main-home/articulos-principales/articulos-principales.component';

@Injectable({
    providedIn: 'root'
})

export default class FirebaseCategoryService{

    constructor(){}

    async loadData_Main_articles(): Promise<string[]> {

        //Accedo a la base de datos
        const category = doc(collection(db, 'Category'), 'Home');
        const categorySnapshot_ = await getDoc(category);
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
        const category = doc(collection(db, 'Category'), 'Home');
        const categorySnapshot_ = await getDoc(category);
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