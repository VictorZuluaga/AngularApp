import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images = [
    'https://via.placeholder.com/500x300',
    'https://via.placeholder.com/500x300',
    'https://via.placeholder.com/500x300',
    // Agrega más URLs de imágenes aquí según tus necesidades
  ];

  selectedImage: number = -1; // Inicializa la variable en -1 para indicar que ninguna imagen está seleccionada

  selectImage(index: number) {
    this.selectedImage = index;
  }
}
  
