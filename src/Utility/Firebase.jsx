import { initializeApp } from "firebase/app";
// import 'firebase/compat/firestore'
// import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAPBjnpzTistAml_i1jARwr361bJUItbqE",
  authDomain: "e-clone-one-b32c1.firebaseapp.com",
  projectId: "e-clone-one-b32c1",
  storageBucket: "e-clone-one-b32c1.appspot.com",
  messagingSenderId: "359040605470",
  appId: "1:359040605470:web:b6e2f92c8987cabad53d0f",
  measurementId: "G-ZYYNJ9KMHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore