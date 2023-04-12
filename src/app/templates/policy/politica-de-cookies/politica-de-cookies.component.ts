import { Component } from '@angular/core';

@Component({
  selector: 'app-politica-de-cookies',
  templateUrl: './politica-de-cookies.component.html',
  styleUrls: ['../policy.css']
})
export class PoliticaDeCookiesComponent {
  jsonpoliticadecookies: HTMLScriptElement;
  constructor(){
    this.jsonpoliticadecookies = document.createElement("script");
    this.jsonpoliticadecookies.src = "../../../assets/scripts/json/jsonpoliticadecookies.js";
    document.body.appendChild(this.jsonpoliticadecookies);    
  }
}
