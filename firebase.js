// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxZ3wYjABKKjVhzbDBVJQzUZEV7b3YHqo",
  authDomain: "twitter-clone-b0561.firebaseapp.com",
  projectId: "twitter-clone-b0561",
  storageBucket: "twitter-clone-b0561.firebasestorage.app",
  messagingSenderId: "397255307741",
  appId: "1:397255307741:web:ac54cf476d7caca5e60634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)