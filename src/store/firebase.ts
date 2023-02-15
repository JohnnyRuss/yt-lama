import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCb3RPaxv-qPaE3AYgPggEYC4gobj8fGQs",
  authDomain: "yt-lama.firebaseapp.com",
  projectId: "yt-lama",
  storageBucket: "yt-lama.appspot.com",
  messagingSenderId: "126805845224",
  appId: "1:126805845224:web:98628b484d37a59475155d",
  measurementId: "G-LYRXFSC06B",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
export const firebaseAuth = getAuth();
export const firebaseGoogleAuthProvider = new GoogleAuthProvider();
