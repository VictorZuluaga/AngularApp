import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent} from '../../templates/main-home/main-home.component'
import { ListaVideosComponent } from './lista-videos/lista-videos.component';
import { ArticulosSecundariosComponent } from './articulos-secundarios/articulos-secundarios.component';
import { ArticulosPrincipalesComponent } from './articulos-principales/articulos-principales.component';

@NgModule({
  declarations: [
    MainHomeComponent,
    ListaVideosComponent,
    ArticulosSecundariosComponent,
    ArticulosPrincipalesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainHomeModule { }
