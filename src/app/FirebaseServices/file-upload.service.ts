import { Injectable } from '@angular/core';
import { db, storage } from "./firebase.service.config";
import { FileUpload } from '../models/file-upload.model';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, doc, getDoc } from 'firebase/firestore/lite';

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

  async defaultImagesList():Promise<any[]>{
    const imagenes_predeterminadas = doc(collection(db, 'imagenes'), 'imagenes-predeterminadas');
    const imagenesSnapshot = await getDoc(imagenes_predeterminadas);
    const url_imagenes = imagenesSnapshot.get('url');
    return url_imagenes;
  }

}
