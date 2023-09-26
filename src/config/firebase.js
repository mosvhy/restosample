 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBStkdO0vbi0ujjB9XnbeLPYuciVOjFmQw",
  authDomain: "yamatoramen-7fb0c.firebaseapp.com",
  projectId: "yamatoramen-7fb0c",
  storageBucket: "yamatoramen-7fb0c.appspot.com",
  messagingSenderId: "460025644389",
  appId: "1:460025644389:web:6cde9d61a50d1afda98d8c",
  measurementId: "G-4SH266FHWY"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);