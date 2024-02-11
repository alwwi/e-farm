// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRBmI1i0JCL7Abph5YeFD5O3zSQCXMCZs",
  authDomain: "e-farm-719b6.firebaseapp.com",
  databaseURL: "https://e-farm-719b6-default-rtdb.firebaseio.com",
  projectId: "e-farm-719b6",
  storageBucket: "e-farm-719b6.appspot.com",
  messagingSenderId: "835743950443",
  appId: "1:835743950443:web:97bbc56979bf7fcda0b32e",
  measurementId: "G-LEGG9B3BR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {app}