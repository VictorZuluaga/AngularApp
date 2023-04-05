import { Component, ViewChild, Renderer2, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('header') header!: ElementRef;

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    console.log("me ejecuto al inicio");
  }

  ngAfterViewInit(): void {

    const header = this.header.nativeElement;
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
