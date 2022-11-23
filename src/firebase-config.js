// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDsMZfoDb0xkGM8676cO0JPhx90U3D_Dc",
  authDomain: "blogproject-b0302.firebaseapp.com",
  projectId: "blogproject-b0302",
  storageBucket: "blogproject-b0302.appspot.com",
  messagingSenderId: "337841401036",
  appId: "1:337841401036:web:9fd74b6e31677822eca669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();