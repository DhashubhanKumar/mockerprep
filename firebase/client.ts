// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey: "AIzaSyD4BoLPNC8NAFNT5q71zA8qkgCCbToY2tc",
  authDomain: "mockerprep.firebaseapp.com",
  projectId: "mockerprep",
  storageBucket: "mockerprep.firebasestorage.app",
  messagingSenderId: "734928583319",
  appId: "1:734928583319:web:3663210409c7be345e07d2",
  measurementId: "G-Z9KT9C3KM2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Enable ignoreUndefinedProperties
initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});

export const auth = getAuth(app);
export const db = getFirestore(app);
