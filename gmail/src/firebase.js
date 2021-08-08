import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuegsZkHtZNXNj8q1N08o5xeNxjM9Bz9U",
  authDomain: "fir-c101e.firebaseapp.com",
  projectId: "fir-c101e",
  storageBucket: "fir-c101e.appspot.com",
  messagingSenderId: "11192728674",
  appId: "1:11192728674:web:0d275694b5697bedbd653b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
