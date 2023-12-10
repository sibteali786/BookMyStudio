// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { addDoc, collection, getDocs } from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbc-bdscF63-Nd_kOdf2Dqmy6p9kHmoVI',
  authDomain: 'booking-studio-1b95e.firebaseapp.com',
  projectId: 'booking-studio-1b95e',
  storageBucket: 'booking-studio-1b95e.appspot.com',
  messagingSenderId: '170287795809',
  appId: '1:170287795809:web:bf93d27c8e7cdcf75aa420',
  measurementId: 'G-BWK5QSH94F',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db, getFirestore, addDoc, collection, getDocs }
