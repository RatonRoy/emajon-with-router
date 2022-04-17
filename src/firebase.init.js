// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1UkNymZDmynWYqILExB328UrlpcHY8YM",
  authDomain: "ema-jon-simple-6a9f6.firebaseapp.com",
  projectId: "ema-jon-simple-6a9f6",
  storageBucket: "ema-jon-simple-6a9f6.appspot.com",
  messagingSenderId: "984949959315",
  appId: "1:984949959315:web:a1c7d1e5ae0f15513c3b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 