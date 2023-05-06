import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../FirebaseServices/file-upload.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: any[] | null = null; // Inicializa la propiedad como null en lugar de una promesa vacía

  constructor(private fileUploadService: FileUploadService) { }

  selectedImage = -1;

  selectImage(index: number) {
    if (this.selectedImage === index) {
      this.selectedImage = -1;
    } else {
      this.selectedImage = index;
    }
  }


  ngOnInit() {
    this.fileUploadService.defaultImagesList().then((images) => {
      this.images = images;
    });
  }
}
