import { Injectable } from '@angular/core';
import env from '../../../../../env'
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { Auth, browserSessionPersistence, getAuth } from 'firebase/auth';
import { FirebaseStorage, getStorage } from 'firebase/storage';

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
  private _storage: FirebaseStorage;
  private _auth: Auth;

  // *=> constructors

  constructor() {
    this._app = initializeApp(firebaseConfig)
    this._db = getFirestore(this.app)
    this._auth = getAuth(this.app)
    this._storage = getStorage(this.app)
    this._auth.setPersistence(browserSessionPersistence)
  }

  // *=> getters & setters

  public get app(): FirebaseApp {
    return this._app;
  }

  public get db(): Firestore {
    return this._db;
  }

  public get auth(): Auth {
    return this._auth;
  }

  public get storage(): FirebaseStorage {
    return this._storage;
  }
}
