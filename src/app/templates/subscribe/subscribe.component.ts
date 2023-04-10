import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  jsonsubscribe : HTMLScriptElement;
  constructor(){
    this.jsonsubscribe = document.createElement("script");
    this.jsonsubscribe.src = "../../assets/scripts/json/jsonsubscribe.js";
    document.body.appendChild(this.jsonsubscribe);
  }
}
