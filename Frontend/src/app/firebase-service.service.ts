import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';




@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {



  constructor(
    private firebaseApp: FirebaseApp
  ) {


    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyA3kJedOyGjRiS4Kv_lUVdLylhHY3nL4ZI",
      authDomain: "heyluncher.firebaseapp.com",
      projectId: "heyluncher",
      storageBucket: "heyluncher.appspot.com",
      messagingSenderId: "627822732095",
      appId: "1:627822732095:web:28c723a01e9e6904d8a98a"
    };

    // Initialize Firebase
    this.firebaseApp = initializeApp(firebaseConfig);


  }

  getLocations() {
    const db = getFirestore(this.firebaseApp);
    const locations = collection(db, "locations");
    return locations;
  }
}
