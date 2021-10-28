import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-SuK9oKBguXoy4OypFhceY3qfyUeJkho",
  authDomain: "react-project-964cb.firebaseapp.com",
  projectId: "react-project-964cb",
  storageBucket: "react-project-964cb.appspot.com",
  messagingSenderId: "966616798416",
  appId: "1:966616798416:web:79f787500dac6d85b07ad5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);