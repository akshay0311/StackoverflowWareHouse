import firebase from "firebase/app";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyE5EeGFPrcJAF0NSW1FIRkfIZS0qnDRI",
    authDomain: "stackoverflowwarehouse.firebaseapp.com",
    projectId: "stackoverflowwarehouse",
    storageBucket: "stackoverflowwarehouse.appspot.com",
    messagingSenderId: "464619332695",
    appId: "1:464619332695:web:4b6f67db736e33c20eaf12",
    measurementId: "G-LNBDHL6Z6C"
  };

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
export default app