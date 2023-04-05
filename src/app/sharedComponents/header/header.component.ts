import { Component, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit {

  constructor(private renderer2: Renderer2) { }

  ngAfterViewInit(): void {

    //cuatro elementos dentro del header
    const hamburger = document.querySelector(".header .hamburger");
    const busqueda = document.querySelector(".header .busqueda");
    const navLinks = document.querySelector(".header .nav-links");
    const otherLinks = document.querySelector(".header .other-links");

    this.renderer2.listen(hamburger, 'click', () => {
      hamburger!.classList.toggle("active");
      busqueda!.classList.toggle("active");
      navLinks!.classList.toggle("active");
      otherLinks!.classList.toggle("active");
    });
  }

}
