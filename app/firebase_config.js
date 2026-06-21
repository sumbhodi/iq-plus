/**
 * firebase_config.js
 * Centralized Firebase initialization
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsajg0OlbKQ-15EhH76MKQUnAgeM0O9t4",
    authDomain: "iqplus-f9ae4.firebaseapp.com",
    projectId: "iqplus-f9ae4",
    storageBucket: "iqplus-f9ae4.firebasestorage.app",
    messagingSenderId: "1099417688611",
    appId: "1:1099417688611:web:d5b6f7243ed484d6966f96",
    measurementId: "G-DRSSQ3Y0BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

console.log("🚀 Firebase Systems Online (Config Loaded)");

export { app, auth, db, storage, provider };
