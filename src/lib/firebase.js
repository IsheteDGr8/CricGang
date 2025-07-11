// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYGfsSw75OQswTZzY9rIEhrSy3P4FZY-c",
  authDomain: "cricgang-cricket-analysis.firebaseapp.com",
  projectId: "cricgang-cricket-analysis",
  storageBucket: "cricgang-cricket-analysis.firebasestorage.app",
  messagingSenderId: "173280777355",
  appId: "1:173280777355:web:60ede8e27ac1763a66708e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };