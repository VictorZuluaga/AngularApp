import { Component,OnInit } from '@angular/core';
import FirebaseArticleService from 'src/app/FirebaseServices/firebase-articles.service';
import { Article } from 'src/app/models/Articles/Article.schema';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  protected titulo!: string;
  protected entrada!:string;
  protected imagen!:string;
  protected pie_foto!: string;
  protected datos!: string;
  protected fecha!: string;
  protected contenido!: string;

  constructor(){
  }

  ngOnInit(): void {
    this.initialize();
  }

  private async initialize(){
    const article = new FirebaseArticleService().loadData();
    this.titulo = (await article).getTitulo();
    this.entrada = (await article).getEntrada();
    this.imagen = (await article).getImagen();
    this.pie_foto = (await article).getPieFoto();
    this.fecha = (await article).getFecha();
    this.contenido = (await article).getContenido();

    
  }

}
