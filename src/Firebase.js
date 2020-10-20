import firebase from "firebase";
// import * as firebase from "firebase";
import "firebase/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApszGI2k7LYBbXxoY1RRhuC2BcWCrrBhE",
  authDomain: "todo-c5c1e.firebaseapp.com",
  databaseURL: "https://todo-c5c1e.firebaseio.com",
  projectId: "todo-c5c1e",
  storageBucket: "todo-c5c1e.appspot.com",
  messagingSenderId: "28124207254",
  appId: "1:28124207254:web:e7f565bb6ba36ed6558ab7",
  measurementId: "G-8K5VPWPRMR",
});

const db = firebaseApp.firestore();

export default db;
