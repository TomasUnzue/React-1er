import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


    const firebaseConfig = {
    apiKey: "AIzaSyDgHY0UKWL_Whku1kDEhjW4mdPlKU4bqBg",
    authDomain: "mi-app-e99d7.firebaseapp.com",
    projectId: "mi-app-e99d7",
    storageBucket: "mi-app-e99d7.appspot.com",
    messagingSenderId: "134222649495",
    appId: "1:134222649495:web:7dd7d53eeddc4283dd71d2",
    measurementId: "G-9XYKCZ9ZCK"
    };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


