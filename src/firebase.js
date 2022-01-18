// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIghZcSwRj9Tyob_EKoTTBu8XZfGcKkeA",
  authDomain: "hectormartinez-resume.firebaseapp.com",
  projectId: "hectormartinez-resume",
  storageBucket: "hectormartinez-resume.appspot.com",
  messagingSenderId: "532729776699",
  appId: "1:532729776699:web:c57002fafe916191d4aa1e",
  measurementId: "G-677BC6QGCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'page_view', `your_event_parameter`)


