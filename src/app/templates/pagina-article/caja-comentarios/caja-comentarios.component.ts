import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caja-comentarios',
  templateUrl: './caja-comentarios.component.html',
  styleUrls: ['./caja-comentarios.component.css']
})

export class CajaComentariosComponent {

  @Input()
  comentarios: any[] = [];

  constructor() {};

}
