import { Injectable } from '@angular/core';
import env from '../../../../../env'
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: env[ "API_KEY" ],
  authDomain: env[ "AUTH_DOMAIN" ],
  projectId: env[ "PROJECT_ID" ],
  storageBucket: env[ "STORAGE_BUCKET" ],
  messagingSenderId: env[ "MESSAGING_SENDER_ID" ],
  appId: env[ "APP_ID" ]
}

@Injectable({ providedIn: 'root' })
export class FirestoreService {

  // *=> properties

  private _app: FirebaseApp;
  private _db: Firestore;

  // *=> constructors

  constructor() {
    this._app = initializeApp(firebaseConfig)
    this._db = getFirestore(this.app)
  }

  // *=> getters & setters

  public get app(): FirebaseApp {
    return this._app;
  }
  public set app(value: FirebaseApp) {
    this._app = value;
  }

  public get db(): Firestore {
    return this._db;
  }
  public set db(value: Firestore) {
    this._db = value;
  }
}
