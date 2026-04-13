import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCkKhnhkYSKXw1s0I1nUMkOt5eF_yX1Ul8",
  authDomain: "tourismofi.firebaseapp.com",
  projectId: "tourismofi",
  storageBucket: "tourismofi.firebasestorage.app",
  messagingSenderId: "417682832843",
  appId: "1:417682832843:web:68e0537c8f207de7ff4a4e",
  measurementId: "G-YDL0DB004X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };