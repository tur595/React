import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKBqLu37ldeG7x88Qvl3JnGp3C8ZdIunM",
  authDomain: "fir-422c6.firebaseapp.com",
  projectId: "fir-422c6",
  storageBucket: "fir-422c6.appspot.com",
  messagingSenderId: "756977621555",
  appId: "1:756977621555:web:7e6111edb30e41a4a0a146",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
