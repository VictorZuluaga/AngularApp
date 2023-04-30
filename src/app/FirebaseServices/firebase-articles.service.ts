import db from "./firebase.service.config";
import { Article } from "../models/Articles/Article.schema";
import { Articles } from "../models/Articles/Articles.model";
import { collection, doc, getDoc} from 'firebase/firestore/lite'
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export default class FirebaseArticleService implements Articles {


    async loadData_article(): Promise<Article> {

        //Accedo a la base de datos
        const article_main_article = doc(collection(db, 'Articles'), 'article');
        const article_most_viewed = doc(collection(db, 'Articles'), 'articulos_mas_vistos');
        const article_related_articles = doc(collection(db, 'Articles'), 'articulos_relacionados');

        const articleSnapshot_main_article = await getDoc(article_main_article);
        const articleSnapshot_most_viewed = await getDoc(article_most_viewed);
        const articleSnapshot_related_articles = await getDoc(article_related_articles);

        //Compruebo su existencia
        if (articleSnapshot_main_article.exists() && articleSnapshot_most_viewed.exists()
        && articleSnapshot_related_articles.exists()) {
            console.log("El documento existe!");
        } else {
            console.log('El documento no existe.');
        }

        //Carga de registros
        const register_main_article = articleSnapshot_main_article.data();
        const register_most_viewed = articleSnapshot_most_viewed.data();
        const register_related_articles = articleSnapshot_related_articles.data();

        //Carga de datos main article
        const titulo = register_main_article!['titulo'];
        const entrada = register_main_article!['entrada'];
        const imagen = register_main_article!['imagen'];
        const pie_foto = register_main_article!['pie_foto'];
        const datos = register_main_article!['datos'];
        const fecha = register_main_article!['fecha'];
        const contenido = register_main_article!['contenido'];

        //Carga de datos most viewed
        const titulo_mas_vistos = register_most_viewed!['titulo_mas_vistos'];
        const contenido1_most_viewed = register_most_viewed!['articulo1_mas_vistos'];
        const contenido2_most_viewed = register_most_viewed!['articulo2_mas_vistos'];
        const contenido3_most_viewed = register_most_viewed!['articulo3_mas_vistos'];

        //Carga de datos related articles
        const titulo_articulo_relacionado = register_related_articles!['titulo_relacionados'];
        const contenido_articulo_relacionado1 = register_related_articles!['articulo1_relacionados'];
        const contenido_articulo_relacionado2 = register_related_articles!['articulo2_relacionados'];
        const contenido_articulo_relacionado3 = register_related_articles!['articulo3_relacionados'];

        //Funcion para cargar los comentarios relacionados con este articulo
        const comentarios = register_main_article!['comentarios'];

        return new Article(titulo,entrada,imagen,pie_foto,datos,fecha,contenido,
                            titulo_mas_vistos,contenido1_most_viewed,contenido2_most_viewed,contenido3_most_viewed,
                            titulo_articulo_relacionado,contenido_articulo_relacionado1,contenido_articulo_relacionado2,
                            contenido_articulo_relacionado3, comentarios);

    }

}