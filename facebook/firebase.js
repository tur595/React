import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAU3Atl2jE_7jryl1dk0Jrc8hK2qw7F83E",
  authDomain: "facebook-32d64.firebaseapp.com",
  projectId: "facebook-32d64",
  storageBucket: "facebook-32d64.appspot.com",
  messagingSenderId: "145512426487",
  appId: "1:145512426487:web:c698f36c31e5fc06addcf2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
