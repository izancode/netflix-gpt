// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUrXY-YhQgGpp8LIC-wEVBFmjz_6CDlGY",
  authDomain: "netflixgpt-e4a01.firebaseapp.com",
  projectId: "netflixgpt-e4a01",
  storageBucket: "netflixgpt-e4a01.appspot.com",
  messagingSenderId: "899523265110",
  appId: "1:899523265110:web:dc858e8fd76b849776f1f7",
  measurementId: "G-6B75184VCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
