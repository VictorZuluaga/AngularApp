import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  constructor(private http: HttpClient){};

  private urlAPI1 = "http://localhost:3000/article";
  private urlAPI2 = "http://localhost:3000/articulos_mas_vistos";
  private urlAPI3 = "http://localhost:3000/articulos_relacionados";


  ngOnInit(): void {
    this.http.get<any>(this.urlAPI1).subscribe((data)=>{
      
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

    this.http.get<any>(this.urlAPI2).subscribe((data)=>{
      
      const articulo_segunda_parte = document.querySelector('.articulo-segunda-parte');

      const titulo = articulo_segunda_parte!.querySelector('h3');
      const lista_articulo = articulo_segunda_parte!.querySelectorAll('li');

      titulo!.textContent = data[0].titulo_mas_vistos;
      lista_articulo[0].textContent = data[0].articulo1_mas_vistos;
      lista_articulo[1].textContent = data[0].articulo2_mas_vistos;
      lista_articulo[2].textContent = data[0].articulo3_mas_vistos;

    });

    this.http.get<any>(this.urlAPI3).subscribe((data)=>{
      
      const articulo_segunda_parte = document.querySelector('.articulo-segunda-parte');

      const titulo = articulo_segunda_parte!.querySelectorAll('h3');
      const lista_articulo = articulo_segunda_parte!.querySelectorAll('li');

      titulo[1]!.textContent = data[0].titulo_relacionados;
      lista_articulo[3].textContent = data[0].articulo1_relacionados;
      lista_articulo[4].textContent = data[0].articulo2_relacionados;
      lista_articulo[5].textContent = data[0].articulo3_relacionados;

    });
  }

}
