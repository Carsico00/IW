import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const configuracionFirebase = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>',
};

if (!firebase.apps.length) {
  firebase.initializeApp(configuracionFirebase);
}

export {firebase};
