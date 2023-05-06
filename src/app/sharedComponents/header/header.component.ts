import { Component, Renderer2, AfterViewInit, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.schema';
import { UserServices } from 'src/app/services/dbServices/Users/user-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})

export class HeaderComponent implements AfterViewInit {

  protected user: Observable<User | null>

  constructor(private renderer2: Renderer2, private User: UserServices) {
    this.user = this.User.loggeduser()
  }


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

  logout: () => void = () => this.User.logout()

}
