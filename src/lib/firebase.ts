import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGLHHHRBN46vnro7qwljPLhC7cQYXsZJg",
  authDomain: "landit-89463.firebaseapp.com",
  projectId: "landit-89463",
  storageBucket: "landit-89463.firebasestorage.app",
  messagingSenderId: "426395338357",
  appId: "1:426395338357:web:21b2a13dc78434893fda3c",
  measurementId: "G-HB1NN40NZD",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
