// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkgDOE85qNnA7qVY4-Pcp_yL_aRSgmqsM",
  authDomain: "alchemaid.firebaseapp.com",
  projectId: "alchemaid",
  storageBucket: "alchemaid.appspot.com",
  messagingSenderId: "1040144852257",
  appId: "1040144852257:web:65af1a0b4e1c04d2820a60",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
