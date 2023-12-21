// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
