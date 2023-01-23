import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdqcu7E6eKFZ5ZABDpZu-03_ENRcTV86Y",
  authDomain: "react-netflix-clone-a98b0.firebaseapp.com",
  projectId: "react-netflix-clone-a98b0",
  storageBucket: "react-netflix-clone-a98b0.appspot.com",
  messagingSenderId: "887599114406",
  appId: "1:887599114406:web:ab157660c45435151e6c67",
  measurementId: "G-73V3JN7VXV"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);