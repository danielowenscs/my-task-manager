import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC2hi_gl3sKXn6t6lyrTnXGMfOm3om69TA",
  authDomain: "my-task-manager-46e9b.firebaseapp.com",
  projectId: "my-task-manager-46e9b",
  storageBucket: "my-task-manager-46e9b.firebasestorage.app",
  messagingSenderId: "735397097053",
  appId: "1:735397097053:web:b83a3b7a49a441a789e7b4",
  measurementId: "G-BBQZ9778FX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
