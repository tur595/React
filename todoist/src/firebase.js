import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCc0ArzwYrN9tY1Vw2h5Ml0KdhPOjJ5PUg",
  authDomain: "todoist-9eac2.firebaseapp.com",
  databaseURL:
    "https://todoist-9eac2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoist-9eac2",
  storageBucket: "todoist-9eac2.appspot.com",
  messagingSenderId: "747846109614",
  appId: "1:747846109614:web:2abf175d9ed764e33ae03f",
});

export { firebaseConfig as firebase };
