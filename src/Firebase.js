import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnlx-JJdiBMIXOQMQKhSsowoXR66Ktb7o",
  authDomain: "fir-auth-a3c28.firebaseapp.com",
  projectId: "fir-auth-a3c28",
  storageBucket: "fir-auth-a3c28.appspot.com",
  messagingSenderId: "487836127448",
  appId: "1:487836127448:web:640eddd5cb8d8e4bd387ad",
  measurementId: "G-ZKDT11XSV2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;