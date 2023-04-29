import env from '../../../env'
import { initializeApp }  from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: env[ "API_KEY" ],
  authDomain: env[ "AUTH_DOMAIN" ],
  projectId: env[ "PROJECT_ID" ],
  storageBucket: env[ "STORAGE_BUCKET" ],
  messagingSenderId: env[ "MESSAGING_SENDER_ID" ],
  appId: env[ "APP_ID" ]
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);