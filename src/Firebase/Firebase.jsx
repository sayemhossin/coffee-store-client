// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAQVGMmcGiCbA0sL-UZGRKnApM-SlUzyw",
  authDomain: "coffee-store-9c3f3.firebaseapp.com",
  projectId: "coffee-store-9c3f3",
  storageBucket: "coffee-store-9c3f3.appspot.com",
  messagingSenderId: "367940328499",
  appId: "1:367940328499:web:a83e04fa0e3288e1d4d746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app