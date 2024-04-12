import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB896pvCZwGVU5RUIWBIVzUAtTllNAu0n8",
  authDomain: "fir-auth-1132.firebaseapp.com",
  projectId: "fir-auth-1132",
  storageBucket: "fir-auth-1132.appspot.com",
  messagingSenderId: "1029021654707",
  appId: "1:1029021654707:web:14aa4dee98449061701ac6",
  measurementId: "G-MFP6M081T7",apiKey: "AIzaSyDLT5VGNrm5_Ks9gs8YlBvvS9rKrKjD2sY",

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
