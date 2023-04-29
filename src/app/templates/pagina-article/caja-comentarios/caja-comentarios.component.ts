import { Component } from '@angular/core';

@Component({
  selector: 'app-caja-comentarios',
  templateUrl: './caja-comentarios.component.html',
  styleUrls: ['./caja-comentarios.component.css']
})

export class CajaComentariosComponent {

  comentarios: any[] = [
    {
      "nombre": "Juan",
      "imagen": "../../../../assets/icons/icono.png",
      "contenido": "Me encanta este artículo"
    },
    {
      "nombre": "Pedro",
      "imagen": "../../../../assets/icons/icono.png",
      "contenido": "Me encanta este artículo"
    },
    {
      "nombre": "Pablo",
      "imagen": "../../../../assets/icons/icono.png",
      "contenido": "Me encanta este artículo"
    },
  ];

  constructor() {};

}
