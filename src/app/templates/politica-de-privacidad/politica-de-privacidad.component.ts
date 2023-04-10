import { Component } from '@angular/core';

@Component({
  selector: 'app-politica-de-privacidad',
  templateUrl: './politica-de-privacidad.component.html',
  styleUrls: ['../contacto/contacto.component.css']
})
export class PoliticaDePrivacidadComponent {
  jsonpoliticadeprivacidad: HTMLScriptElement;
  constructor(){
    this.jsonpoliticadeprivacidad = document.createElement("script");
    this.jsonpoliticadeprivacidad.src = "../../assets/scripts/json/jsonpoliticadeprivacidad.js";
    document.body.appendChild(this.jsonpoliticadeprivacidad);    
  }
}
