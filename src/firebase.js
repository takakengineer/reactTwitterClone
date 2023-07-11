import _default from "@mui/material/styles/identifier";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC0uNNoW3Hqo4Dk0QORUXRBFI7sR2__dgY",
  authDomain: "twitter-clone-udemy-1ef3e.firebaseapp.com",
  projectId: "twitter-clone-udemy-1ef3e",
  storageBucket: "twitter-clone-udemy-1ef3e.appspot.com",
  messagingSenderId: "520570802714",
  appId: "1:520570802714:web:36284d43defc69fe9c37a3",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
