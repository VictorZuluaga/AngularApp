import { Component } from '@angular/core';
import { FileUpload } from "../../models/file-upload.model";
import { FileUploadService } from "../../FirebaseServices/file-upload.service";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: [ './upload-image.component.css' ],
})
export class UploadImageComponent {
  protected imageRefP?: Promise<string>;
  constructor(private fileUploadService: FileUploadService) { }

  cargarImagenes(event: any) {

    const file = event.target.files[ 0 ];
    const fileUpload = new FileUpload(file);
    this.imageRefP = this.fileUploadService.pushFileToStorage(fileUpload);
  }
}

