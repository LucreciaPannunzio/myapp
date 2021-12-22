import { initializeApp } from '@firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAq9wV32Xu8TLwi1YR8E1OyknlYC0acNu4",
    authDomain: "pippers-3e687.firebaseapp.com",
    projectId: "pippers-3e687",
    storageBucket: "pippers-3e687.appspot.com",
    messagingSenderId: "375266483013",
    appId: "1:375266483013:web:8d7fe271b8f3b08d9c3c2c"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);