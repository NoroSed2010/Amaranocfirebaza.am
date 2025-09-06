import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkoZb54y3xlXfzof1KRBFvjaglRTZ5pzU",
  authDomain: "amaranocfirebasa.firebaseapp.com",
  projectId: "amaranocfirebasa",
  storageBucket: "amaranocfirebasa.firebasestorage.app",
  messagingSenderId: "927993496823",
  appId: "1:927993496823:web:8b0585df4e21cdbca7fff2",
  measurementId: "G-BGK90SHNHV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 
