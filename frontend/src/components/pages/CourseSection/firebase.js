import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmamZGwru7nHNIpsXysSCIdfnOuac0IfU",
  authDomain: "educare-sectionmaterials.firebaseapp.com",
  projectId: "educare-sectionmaterials",
  storageBucket: "educare-sectionmaterials.appspot.com",
  messagingSenderId: "829286779316",
  appId: "1:829286779316:web:4e66b3537677bfd0f0cae1",
  measurementId: "G-0LN2SF8QD4",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
