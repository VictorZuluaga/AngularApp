import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent {
  
  ngAfterViewInit(): void {
    console.log("todo ok");
    const elemento = document.querySelector('articulos-principales');
  }
}
