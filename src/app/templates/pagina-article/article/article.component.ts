import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import FirebaseArticleService from 'src/app/FirebaseServices/firebase-articles.service';

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
  protected titulo_mas_vistos:string = "Artículos más vistos";
  protected articulos_mas_vistos: string[] = [];

  //articulos relacionados
  protected titulo_relacionados:string = "Artículos relacionados";
  protected articulos_relacionados: string[] = [];

  @Output()
  loadComentarios: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(private firebaseArticleService: FirebaseArticleService){
  }

  ngOnInit(): void {
    this.initialize_main_article();
    this.initialize_most_viewed_articles();
    this.initialize_related_articles();
  }

  private async initialize_main_article(){
    const jsonArticle = JSON.parse(await this.firebaseArticleService.loadData_article());
    this.titulo = jsonArticle.titulo;
    this.contenido = jsonArticle.contenido;
    this.entrada = jsonArticle.entrada;
    this.imagen = jsonArticle.imagen;
    this.pie_foto = jsonArticle.pie_foto;
    this.datos = jsonArticle.datos;
    this.fecha = jsonArticle.fecha;
    this.loadComentarios.emit(jsonArticle.comentarios);
  }

  private async initialize_most_viewed_articles(){
    this.articulos_mas_vistos = await this.firebaseArticleService.loadData_Most_Viewed();
  }

  private async initialize_related_articles(){
    this.articulos_relacionados = await this.firebaseArticleService.loadData_Related_Articles();
  }

}
