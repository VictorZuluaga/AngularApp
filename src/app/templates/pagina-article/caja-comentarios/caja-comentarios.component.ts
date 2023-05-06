import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import FirebaseCommentService from 'src/app/FirebaseServices/firebase-comment.service';
import Comment from 'src/app/models/Comment.schema';
import { UserServices } from 'src/app/services/dbServices/Users/user-services.service';

@Component({
  selector: 'app-caja-comentarios',
  templateUrl: './caja-comentarios.component.html',
  styleUrls: [ './caja-comentarios.component.css' ]
})

export class CajaComentariosComponent {

  @Input()
  comentarios?: Observable<any | null>;
  nuevo_mensaje: string = "";

  constructor(private service: FirebaseCommentService, private route: ActivatedRoute) { };

  publicarComentario() {
    this.service.saveNewComment(this.route.snapshot.paramMap.get("article") || "", this.nuevo_mensaje);
    this.nuevo_mensaje = ""
  }

}
