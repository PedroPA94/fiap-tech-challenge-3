import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASdG81ZzExByrwbZwWB-sPIfcZlz5j07g",
  authDomain: "fiap-tech-challenge-3-31728.firebaseapp.com",
  projectId: "fiap-tech-challenge-3-31728",
  storageBucket: "fiap-tech-challenge-3-31728.firebasestorage.app",
  messagingSenderId: "70615285266",
  appId: "1:70615285266:web:520d4759930324c69222cb",
  measurementId: "G-LX9PCCYMFE",
  databaseURL: "",
};

let app;
let auth;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} else {
  app = getApp();
  auth = getAuth(app);
}

export { app, auth };
