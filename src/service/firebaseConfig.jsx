// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
    authDomain: "itinerary-planner-7e1e3.firebaseapp.com",
    projectId: "itinerary-planner-7e1e3",
    storageBucket: "itinerary-planner-7e1e3.firebasestorage.app",
    messagingSenderId: "926515591077",
    appId: "1:926515591077:web:d7e4a90b546f5029111a4c",
    measurementId: "G-H959H1BT1Z"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);