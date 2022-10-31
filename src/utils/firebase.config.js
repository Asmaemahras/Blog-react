// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";
 

const app = firebase.initializeApp({
  apiKey: "AIzaSyDO8OQe5oHs1jzA2rJw8NBvwERhJcvgDFo",
  authDomain: "my-app-react-8d92a.firebaseapp.com",
  projectId: "my-app-react-8d92a",
  storageBucket: "my-app-react-8d92a.appspot.com",
  messagingSenderId: "495557643150",
  appId: "1:495557643150:web:32a4f677d4c76357b6b2df"
});

export const auth = app.auth();
export const db = getFirestore(); // pour avoir accès à tt nos données.
export default app;