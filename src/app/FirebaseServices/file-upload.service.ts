import { Injectable } from '@angular/core';
import { storage } from "./firebase.service.config";
import { FileUpload } from '../models/file-upload.model';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  private basePath = '';

  pushFileToStorage(fileUpload: FileUpload): void {

    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = ref(storage, filePath);
    const metadata = {
      contentType: 'image/jpeg'
    };
    const uploadTask = uploadBytesResumable(storageRef, fileUpload.file, metadata);
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
    });
    
  }
}
