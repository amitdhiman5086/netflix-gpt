// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgdV-gj2csQr4AGExllOtYyoa4KOGx6iU",
  authDomain: "netflixgpt-b7ca3.firebaseapp.com",
  projectId: "netflixgpt-b7ca3",
  storageBucket: "netflixgpt-b7ca3.appspot.com",
  messagingSenderId: "415910514898",
  appId: "1:415910514898:web:31a21fdf1fcf78fdb05d0b",
  measurementId: "G-ZTNFDEJB0M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
