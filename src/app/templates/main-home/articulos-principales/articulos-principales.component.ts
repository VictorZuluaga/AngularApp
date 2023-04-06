import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-articulos-principales',
  templateUrl: './articulos-principales.component.html',
  styleUrls: ['./articulos-principales.component.css','../main-home.component.css']
})
export class ArticulosPrincipalesComponent implements OnInit{

  private urlAPI = "http://localhost:3000/articulos-principales";

  constructor(private http: HttpClient){};
  
  ngOnInit(): void {

    //Al inicio se ejecuta este metodo que realizará la carga del contenido de articulos-principales (HOME)
    this.http.get<any[]>(this.urlAPI).subscribe((data)=>{
      
      const articulosprincipales = document.querySelector('.articulos-principales');

      //carga imagenes
      const articulos_imagenes = articulosprincipales!.querySelectorAll('.imagenes');
      articulos_imagenes[0].setAttribute('src',data[0].imagen);
      articulos_imagenes[1].setAttribute('src',data[1].imagen);
      articulos_imagenes[2].setAttribute('src',data[2].imagen);

      //carga titulos
      const articulos_titulos = articulosprincipales!.querySelectorAll('.titulo');
      articulos_titulos[0].textContent = data[0].titulo;
      articulos_titulos[1].textContent = data[1].titulo;
      articulos_titulos[2].textContent = data[2].titulo;
      //carga datos
      const articulos_datos = articulosprincipales!.querySelectorAll('.datos');
      articulos_datos[0].textContent = data[0].datos;
      articulos_datos[1].textContent = data[1].datos;
      articulos_datos[2].textContent = data[2].datos;

      //carga resumen
      const articulos_resumen = articulosprincipales!.querySelectorAll('.resumen');
      articulos_resumen[0].textContent = data[0].resumen;
      articulos_resumen[1].textContent = data[1].resumen;
      articulos_resumen[2].textContent = data[2].resumen;

    });
  }

}
