import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDT_s4rJL1T383xuTT-MCJiu11ydsgzf8w",
  authDomain: "slack-clone-299f9.firebaseapp.com",
  projectId: "slack-clone-299f9",
  storageBucket: "slack-clone-299f9.appspot.com",
  messagingSenderId: "544633336606",
  appId: "1:544633336606:web:ed3a29803009ed57884f0f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
