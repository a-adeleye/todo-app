import { getFirestore, query, getDocs, collection, where, addDoc,} from "firebase/firestore";


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBj5ZQOyOZosx1UCnSRJ7Hm9xW-WOIFl2w",

  authDomain: "todo-app-f1d77.firebaseapp.com",

  projectId: "todo-app-f1d77",

  storageBucket: "todo-app-f1d77.appspot.com",

  messagingSenderId: "103355043441",

  appId: "1:103355043441:web:560e13b04a9568c6d0d5d0",

  measurementId: "G-L0PLV4M39X"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);