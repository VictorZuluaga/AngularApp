import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  constructor(private http: HttpClient){};

  private urlAPI = "http://localhost:3000/article";

  ngOnInit(): void {
    this.http.get<any>(this.urlAPI).subscribe((data)=>{
      
      const articulo_primera_parte = document.querySelector('.articulo-primera-parte');

      const titulo_articulo = articulo_primera_parte!.querySelector('.titulo-articulo');
      const entrada_articulo = articulo_primera_parte!.querySelector('.entrada-articulo');
      const imagen_articulo = articulo_primera_parte!.querySelector('.imagen-articulo');
      const pie_foto = articulo_primera_parte!.querySelector('.pie-de-foto-articulo');
      const datos_articulo = articulo_primera_parte!.querySelector('.datos-articulo');
      const fecha_articulo = articulo_primera_parte!.querySelector('.fecha-articulo');
      const contenido_articulo = articulo_primera_parte!.querySelector('.contenido-articulo');

      titulo_articulo!.textContent = data[0].titulo;
      entrada_articulo!.textContent = data[0].entrada;
      imagen_articulo!.setAttribute('src',data[0].imagen);
      pie_foto!.textContent = data[0].pie_foto;
      datos_articulo!.textContent = data[0].datos;
      fecha_articulo!.textContent = data[0].fecha;
      contenido_articulo!.textContent = data[0].contenido;

    });
  }

}
