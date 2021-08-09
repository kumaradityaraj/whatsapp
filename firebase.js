import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjjVhl6w0RCsKZ1MF0yaIuLPh9hcarH2Q",
  authDomain: "whatsapp-c88c5.firebaseapp.com",
  projectId: "whatsapp-c88c5",
  storageBucket: "whatsapp-c88c5.appspot.com",
  messagingSenderId: "773044845775",
  appId: "1:773044845775:web:53131bcf3a1c112b68cbba",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
