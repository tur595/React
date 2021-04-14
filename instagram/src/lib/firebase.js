import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD7izQTO5PzJdIePe-6Hr8bn6UTjMY8aE0",
  authDomain: "instagram-a0e48.firebaseapp.com",
  projectId: "instagram-a0e48",
  storageBucket: "instagram-a0e48.appspot.com",
  messagingSenderId: "921280531364",
  appId: "1:921280531364:web:e0f7323961a211d8964f31",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
