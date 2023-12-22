// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAURsZ26uTdhRMUtdhnIobR4HSjVl0Ep-g",
  authDomain: "alchemaid-24544.firebaseapp.com",
  projectId: "alchemaid-24544",
  storageBucket: "alchemaid-24544.appspot.com",
  messagingSenderId: "1055334319574",
  appId: "1:1055334319574:web:8f3cec897d3fc4296fd077",
  measurementId: "G-64CLJLXWYY",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

let db = getFirestore(firebase_app);
const auth = getAuth(firebase_app);

export { firebase_app, db, auth };
