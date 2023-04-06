import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  jsoncontacto: HTMLScriptElement;
  constructor(){
    this.jsoncontacto = document.createElement("script");
    this.jsoncontacto.src = "../../assets/scripts/json/jsoncontacto.js";
    document.body.appendChild(this.jsoncontacto);    
  }
}
