import { auth, googleProvider } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    sendEmailVerification,
    signOut,
} from "firebase/auth";

export const registerUser = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
};

export const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
};

export const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
};

export const logoutUser = async () => {
    return await signOut(auth);
};
