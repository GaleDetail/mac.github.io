import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmKemFY0HYee7_qIIbytp-f-ebZy8kxH8",
    authDomain: "mac-1-b83d8.firebaseapp.com",
    projectId: "mac-1-b83d8",
    storageBucket: "mac-1-b83d8.appspot.com",
    messagingSenderId: "70802742324",
    appId: "1:70802742324:web:c82cd6d743166d74603e61",
    measurementId: "G-LQY3YR999S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
