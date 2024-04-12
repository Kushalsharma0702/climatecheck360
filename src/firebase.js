import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyDLT5VGNrm5_Ks9gs8YlBvvS9rKrKjD2sY",

  authDomain: "climate-check-360.firebaseapp.com",

  databaseURL: "https://climate-check-360-default-rtdb.firebaseio.com",

  projectId: "climate-check-360",

  storageBucket: "climate-check-360.appspot.com",

  messagingSenderId: "491332887364",

  appId: "1:491332887364:web:6da35e591994f98f54ad11",

  measurementId: "G-WL33DTYDFY",

};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
