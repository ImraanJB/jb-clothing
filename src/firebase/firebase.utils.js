import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCudqw_x7ll6k521mzPO1iYjVZ80atIgzo",
  authDomain: "jb-shop-db.firebaseapp.com",
  databaseURL: "https://jb-shop-db.firebaseio.com",
  projectId: "jb-shop-db",
  storageBucket: "jb-shop-db.appspot.com",
  messagingSenderId: "873340891188",
  appId: "1:873340891188:web:59206946fa7192c7351a61",
  measurementId: "G-4MPH0KSVEM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
