// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add Firebase Auth import
import { getAuth, GoogleAuthProvider } from "firebase/auth";
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
// Export the initialized app and auth helpers
export default app;
export { getAuth, GoogleAuthProvider };