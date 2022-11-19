
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxBnyriJ5wLlZ1lpH9o94Ye6qIV9eyORQ",
    authDomain: "fireblog-ebe5b.firebaseapp.com",
    projectId: "fireblog-ebe5b",
    storageBucket: "fireblog-ebe5b.appspot.com",
    messagingSenderId: "308217004280",
    appId: "1:308217004280:web:ff79b8f989ce453799fb0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();