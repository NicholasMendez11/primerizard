// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH2tXdaf3tugJZoxwNXrvKVJH-gW6q0Gk",
  authDomain: "primeriza-rd.firebaseapp.com",
  projectId: "primeriza-rd",
  storageBucket: "primeriza-rd.appspot.com",
  messagingSenderId: "795148533198",
  appId: "1:795148533198:web:7e55aaf8e26987f5b9bf9f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};

// NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCH2tXdaf3tugJZoxwNXrvKVJH-gW6q0Gk
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=primeriza-rd.firebaseapp.com
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=primeriza-rd
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=primeriza-rd.appspot.com
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=795148533198
// NEXT_PUBLIC_FIREBASE_APP_ID=1:795148533198:web:7e55aaf8e26987f5b9bf9f
