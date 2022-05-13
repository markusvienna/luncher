import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, child, get } from 'firebase/database';
//import * as fs from 'fs';




@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  private firebaseApp: FirebaseApp

  constructor(
    
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

    // TODO: we didnt manage to configure firebase correctly yet, directly returning data

    /*const db = getFirestore(this.firebaseApp);
    //const locations = collection(db, "locations");

    //const locationsRef = ref(db, "locations");
    const locationsCol = collection(db, "locations");
    const locationsSnap = await getDocs(locationsCol);
    //const locationsList = locationsSnap.docs.map(p => p.data());

    return locationsSnap;

    /*onValue(locationsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    })*/

    /*const dbRef = ref(db);
      get(child(dbRef, `locations`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });*/

    //return locations;
    //return db.toJSON();*/

      //return fs.readFileSync("mock-data/locations.json");

    return {
      "locations": [
        {
          "id": "alias",
          "name": "Alias",
          "cuisine": ["Flammkuchen", "Italienisch"]
        },
        {
          "id": "dlounge",
          "name": "D'Lounge",
          "cuisine": ["Pizza", "Italienisch"]
        },
        {
          "id": "grillandchill",
          "name": "Grill & Chill",
          "cuisine": ["Steak", "Burger", "Herzhaft"]
        },
        {
          "id": "kyoto",
          "name": "Kyoto Sunrise Sushi",
          "cuisine": ["Sushi", "Asiatisch"]
        },
        {
          "id": "kugeln",
          "name": "Zu den 3 goldenen Kugeln",
          "cuisine": ["Schnitzel", "Österreichisch", "Herzhaft"]
        },
        {
          "id": "sajado",
          "name": "Sajado",
          "cuisine": ["Spieße", "Tischgrill", "Asiatisch"]
        }
      ]
    };    
  }
}
