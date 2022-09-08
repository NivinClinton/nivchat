
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBGeF-2N1UecaVE5v8FCs6NZtuaqwgH36k",
  authDomain: "nivchat-786d3.firebaseapp.com",
  projectId: "nivchat-786d3",
  storageBucket: "nivchat-786d3.appspot.com",
  messagingSenderId: "753587028252",
  appId: "1:753587028252:web:d6f468cee6e9f1b3ad3ad9"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()