import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCltEUZN5E-XConH-kxrZ6PWHFVxtLHYDQ",
  authDomain: "netflix-fb291.firebaseapp.com",
  projectId: "netflix-fb291",
  storageBucket: "netflix-fb291.appspot.com",
  messagingSenderId: "649359554320",
  appId: "1:649359554320:web:0a4551aa1690ea72635795",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
