import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCyBLJwKT9q4oiZyZ2cfWr9vajKmzf3M6g",
    authDomain: "messengr-clone.firebaseapp.com",
    projectId: "messengr-clone",
    storageBucket: "messengr-clone.appspot.com",
    messagingSenderId: "428460858356",
    appId: "1:428460858356:web:a4ba5491c7f67d3dc1b7a1",
    measurementId: "G-FTD2E2F0Z9"
});

const db = firebase.firestore();
export default  db ;