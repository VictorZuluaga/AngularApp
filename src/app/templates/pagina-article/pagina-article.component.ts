import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import Comment from 'src/app/models/Comment.schema';

@Component({
  selector: 'app-pagina-article',
  templateUrl: './pagina-article.component.html',
  styleUrls: [ './pagina-article.component.css' ]
})
export class PaginaArticleComponent {
  comentarios?: Observable<any | null>;

  constructor() { }

  loadComment(event: any) {
    this.comentarios = event;
  }
}
