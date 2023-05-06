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

  cargarImagen(event:any){
    const file = new File(event.target.files, "undefined");
    const fileUpload = new FileUpload(file);
    this.fileUploadService.pushFileToStorage(fileUpload);
  }

}
