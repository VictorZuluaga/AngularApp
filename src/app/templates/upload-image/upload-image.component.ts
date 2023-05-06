import { Component } from '@angular/core';
import {FileUpload} from "../../models/file-upload.model";
import {FileUploadService} from "../../FirebaseServices/file-upload.service";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {

  constructor(private fileUploadService:FileUploadService) { }

  cargarImagenes(event: any) {

    for (let index = 0; index < event.target.files.length; index++) {
      const file = event.target.files[index];
      const fileUpload = new FileUpload(file);
      this.fileUploadService.pushFileToStorage(fileUpload);
    }

  }

}