import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import FirebaseCommentService from 'src/app/FirebaseServices/firebase-comment.service';
import Comment from 'src/app/models/Comment.schema';

@Component({
  selector: 'app-caja-comentarios',
  templateUrl: './caja-comentarios.component.html',
  styleUrls: [ './caja-comentarios.component.css' ]
})

export class CajaComentariosComponent {

  @Input()
  comentarios?: Observable<any | null>;
  nuevo_mensaje: string = "";
  userLogged: boolean = false;

  constructor(private service: FirebaseCommentService) {
  };

  publicarComentario() {
    if (this.userLogged == true) {
      console.log("aun no podemos verificar que has sido logeado");
    } else {
      console.log("se publicara el comentario como usuario anonimo");
      this.service.saveNewComment(this.nuevo_mensaje);
      this.nuevo_mensaje = ""
    }
  }

  articleFormat(comentario: string) {
    const user = "'anonymous':";
  }

}
