import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FileUploadService } from '../../FirebaseServices/file-upload.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: [ './image-gallery.component.css' ]
})
export class ImageGalleryComponent implements OnInit, OnChanges {

  @Input()
  imageRefP?: Promise<string>

  @Output()
  imageSelected: EventEmitter<string> = new EventEmitter<string>()

  selectedImage: number = 0;

  images: any[] | null = null; // Inicializa la propiedad como null en lugar de una promesa vacía

  constructor(private fileUploadService: FileUploadService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.imageRefP?.then(ref => this.images?.push(ref))
  }


  selectImage(index: number) {
    if (this.selectedImage === index) {
      this.selectedImage = -1;
    } else {
      this.selectedImage = index;
    }
    this.imageSelected.emit(this.images?.[ this.selectedImage ])
  }


  ngOnInit() {
    this.fileUploadService.defaultImagesList().then((images) => {
      this.images = images;
    }).then(() => this.imageSelected.emit(this.images?.[ this.selectedImage ]))

  }
}
