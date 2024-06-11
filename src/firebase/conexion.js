import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCtu2VTHlSZR5p2pIt6ADgAw6JyFPuOBhQ",
  authDomain: "proy-final-coderhouse.firebaseapp.com",
  projectId: "proy-final-coderhouse",
  storageBucket: "proy-final-coderhouse.appspot.com",
  messagingSenderId: "246219365640",
  appId: "1:246219365640:web:aad7048304cbebabc860bd"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)