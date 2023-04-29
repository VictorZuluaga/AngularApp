import { Component,OnInit } from '@angular/core';
import FirebaseArticleService from 'src/app/FirebaseServices/firebase-articles.service';
import { CajaComentariosComponent } from '../caja-comentarios/caja-comentarios.component';
import { CommaExpr } from '@angular/compiler';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  //articulo principal
  protected titulo!: string;
  protected entrada!:string;
  protected imagen!:string;
  protected pie_foto!: string;
  protected datos!: string;
  protected fecha!: string;
  protected contenido!: string;

  //articulos mas vistos
  protected titulo_mas_vistos!: string;
  protected contenido1_most_viewed!:string;
  protected contenido2_most_viewed!:string;
  protected contenido3_most_viewed!:string;

  //articulos relacionados
  protected titulo_articulo_relacionado!:string;
  protected contenido_articulo_relacionado1!:string;
  protected contenido_articulo_relacionado2!:string;
  protected contenido_articulo_relacionado3!:string;

  constructor(){
  }

  ngOnInit(): void {
    this.initialize_main_article();
  }

  private async initialize_main_article(){
    const article = new FirebaseArticleService().loadData_article();
    this.titulo = (await article).getTitulo();
    this.entrada = (await article).getEntrada();
    this.imagen = (await article).getImagen();
    this.pie_foto = (await article).getPieFoto();
    this.fecha = (await article).getFecha();
    this.contenido = (await article).getContenido();
    this.titulo_mas_vistos = (await article).getTituloMasVistos();
    this.contenido1_most_viewed = (await article).getContenido1MostViewed();
    this.contenido2_most_viewed = (await article).getContenido2MostViewed();
    this.contenido3_most_viewed = (await article).getContenido3MostViewed();
    this.titulo_articulo_relacionado = (await article).getTituloArticuloRelacionado();
    this.contenido_articulo_relacionado1 = (await article).getContenidoArticuloRelacionado1();
    this.contenido_articulo_relacionado2 = (await article).getContenidoArticuloRelacionado2();
    this.contenido_articulo_relacionado3 = (await article).getContenidoArticuloRelacionado3();
    const commentBox = (await article).getCommentBox();
    //CajaComentariosComponent.getComentarios(commentBox);
  }

}
