import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlg1XzNHxwonqZ-INGvrxR5r9yTWxjZGg",
  authDomain: "ecommerce-website-cb95a.firebaseapp.com",
  databaseURL: "https://ecommerce-website-cb95a.firebaseio.com",
  projectId: "ecommerce-website-cb95a",
  storageBucket: "ecommerce-website-cb95a.appspot.com",
  messagingSenderId: "743431787146",
  appId: "1:743431787146:web:1451f719ff127a66bd9373",
  measurementId: "G-VVJD2G5P7V"
};

const firebaseApp = firebase.initializeApp((firebaseConfig));

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };