import { Injectable } from '@angular/core';
import { FileUpload } from '../models/file-upload.model';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, doc, getDoc } from 'firebase/firestore';
import { FirestoreService } from '../services/dbServices/FirebaseServices/firestore.service';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  private basePath = '/temp';

  constructor(private fss: FirestoreService) { }

  pushFileToStorage(fileUpload: FileUpload): Promise<string> {

    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = ref(this.fss.storage, filePath);
    const metadata = {
      contentType: 'image/jpeg'
    };
    return uploadBytesResumable(storageRef, fileUpload.file, metadata).then(uploadTask => getDownloadURL(uploadTask.ref)) as Promise<string>
  }

  async defaultImagesList(): Promise<any[]> {
    const imagenes_predeterminadas = doc(collection(this.fss.db, 'imagenes'), 'imagenes-predeterminadas');
    const imagenesSnapshot = await getDoc(imagenes_predeterminadas);
    const url_imagenes = imagenesSnapshot.get('url');
    return url_imagenes;
  }

}
