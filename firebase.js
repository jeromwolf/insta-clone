// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8GUu--SwOUV_XocrBPx_IrXKnBss5Qc",
  authDomain: "instagram-clone-78f16.firebaseapp.com",
  projectId: "instagram-clone-78f16",
  storageBucket: "instagram-clone-78f16.appspot.com",
  messagingSenderId: "999590753819",
  appId: "1:999590753819:web:e78325bc7fa3451d2f6abe"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };


