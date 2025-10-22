//firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVdP3ea5XVf769bj9d_Kn0EGh7lDuEirs",
  authDomain: "voqzai-d601f.firebaseapp.com",
  databaseURL: "https://voqzai-d601f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "voqzai-d601f",
  storageBucket: "voqzai-d601f.firebasestorage.app",
  messagingSenderId: "704197004873",
  appId: "1:704197004873:web:4bc0c2716c7f1dccd2f998",
  measurementId: "G-S3P2CVKVYM"
};

const app = initializeApp(firebaseConfig);

// ✅ Auth & DB
export const auth = getAuth(app);
export const database = getDatabase(app);

// ✅ Sign in anonymously at startup (so .read rules work)
signInAnonymously(auth).catch((error) => {
  console.error("Anonymous sign-in failed:", error.code, error.message);
});