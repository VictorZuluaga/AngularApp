import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-articulos-secundarios',
  templateUrl: './articulos-secundarios.component.html',
  styleUrls: ['./articulos-secundarios.component.css','../main-home.component.css']
})
export class ArticulosSecundariosComponent implements OnInit{

  private urlAPI = "http://localhost:3000/articulos-secundarios";
  categoria = "El tiempo";

  constructor(private http: HttpClient){};

  ngOnInit(): void {
    this.http.get<any[]>(this.urlAPI).subscribe((data)=>{
      
      const cuatroarticulos = document.querySelector('.cuatro-articulos');

      //carga imagenes
      const articulos_imagenes = cuatroarticulos!.querySelectorAll('.imagen');
      articulos_imagenes[0].setAttribute('src',data[0].imagen);
      articulos_imagenes[1].setAttribute('src',data[1].imagen);
      articulos_imagenes[2].setAttribute('src',data[2].imagen);
      articulos_imagenes[3].setAttribute('src',data[3].imagen);
      
      //carga titulos
      const articulos_titulos = cuatroarticulos!.querySelectorAll('.titulo');
      articulos_titulos[0].textContent = data[0].titulo;
      articulos_titulos[1].textContent = data[1].titulo;
      articulos_titulos[2].textContent = data[2].titulo;
      articulos_titulos[3].textContent = data[3].titulo;

      //carga datos
      const articulos_datos = cuatroarticulos!.querySelectorAll('.datos');
      articulos_datos[0].textContent = data[0].datos;
      articulos_datos[1].textContent = data[1].datos;
      articulos_datos[2].textContent = data[2].datos;
      articulos_datos[3].textContent = data[3].datos;

    });
  }

}
