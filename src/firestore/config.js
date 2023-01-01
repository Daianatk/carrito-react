import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRwkqhBUjuuSuECnKzqBZr1XjCjyPfIm4",
  authDomain: "carrito-react-e3cc5.firebaseapp.com",
  projectId: "carrito-react-e3cc5",
  storageBucket: "carrito-react-e3cc5.appspot.com",
  messagingSenderId: "219316851771",
  appId: "1:219316851771:web:51c07ce5818f49f0b8781e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}