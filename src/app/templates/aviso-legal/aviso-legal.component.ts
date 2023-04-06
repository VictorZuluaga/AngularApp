import { Component } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['../contacto/contacto.component.css']
})
export class AvisoLegalComponent {
  jsonavisolegal: HTMLScriptElement;
  constructor(){
    this.jsonavisolegal = document.createElement("script");
    this.jsonavisolegal.src = "../../assets/scripts/json/jsonavisolegal.js";
    document.body.appendChild(this.jsonavisolegal);    
  }
}
