import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-caja-comentarios',
  templateUrl: './caja-comentarios.component.html',
  styleUrls: ['./caja-comentarios.component.css']
})
export class CajaComentariosComponent implements OnInit{

  private urlAPI = "http://localhost:3000/comentarios";

  constructor(private http: HttpClient){};

  ngOnInit(): void {
    this.http.get<any[]>(this.urlAPI).subscribe((data)=>{
      
      const comentarios = document.querySelectorAll('.comentarios-publicados');
      
      let imagen = comentarios[0].querySelector('img');
      let nombre = comentarios[0].querySelectorAll('p');
      imagen?.setAttribute('src',data[0].imagen_usuario1);
      nombre[0]!.textContent = data[0].nombre_usuario1;
      nombre[1]!.textContent = data[0].contenido_comentario_usuario1;

      imagen = comentarios[1].querySelector('img');
      nombre = comentarios[1].querySelectorAll('p');
      imagen?.setAttribute('src',data[0].imagen_usuario2);
      nombre[0]!.textContent = data[0].nombre_usuario2;
      nombre[1]!.textContent = data[0].contenido_comentario_usuario2;

  
    });
  }

}
