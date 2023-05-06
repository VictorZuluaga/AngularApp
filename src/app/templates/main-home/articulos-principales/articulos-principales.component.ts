import { Component, OnInit } from '@angular/core';
import FirebaseCategoryService from 'src/app/FirebaseServices/firebase-category.service';

@Component({
  selector: 'app-articulos-principales',
  templateUrl: './articulos-principales.component.html',
  styleUrls: [ './articulos-principales.component.css', '../main-home.component.css' ]
})

export class ArticulosPrincipalesComponent implements OnInit {

  articulos: any[] = [];

  constructor(private firebaseCategoryService: FirebaseCategoryService) {
  };

  async ngOnInit(): Promise<void> {
    this.articulos = await this.firebaseCategoryService.loadData_Main_articles();
  }

}
