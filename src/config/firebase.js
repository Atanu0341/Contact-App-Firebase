// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQnUgTj7ZAhzFxqjlJ_moOEiEO-gygbzg",
  authDomain: "vite-contact-app-f459b.firebaseapp.com",
  projectId: "vite-contact-app-f459b",
  storageBucket: "vite-contact-app-f459b.appspot.com",
  messagingSenderId: "33692421145",
  appId: "1:33692421145:web:0a4979654cbd2123156e88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
