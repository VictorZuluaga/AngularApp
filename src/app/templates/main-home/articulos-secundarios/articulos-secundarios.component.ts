import { Component, OnInit } from '@angular/core';
import FirebaseCategoryService from 'src/app/FirebaseServices/firebase-category.service';

@Component({
  selector: 'app-articulos-secundarios',
  templateUrl: './articulos-secundarios.component.html',
  styleUrls: [ './articulos-secundarios.component.css', '../main-home.component.css' ]
})

export class ArticulosSecundariosComponent implements OnInit {

  articulos: any[] = [];
  categoria: string = 'El tiempo';

  constructor(private firebaseCategoryService: FirebaseCategoryService) { };

  async ngOnInit(): Promise<void> {
    this.articulos = await this.firebaseCategoryService.loadData_Secondary_articles();
  }

}
