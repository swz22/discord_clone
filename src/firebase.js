import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpCWEm38DL-Mhvn8eKf4wQdMl6qy4_9bo",
  authDomain: "chatdsc-520c3.firebaseapp.com",
  projectId: "chatdsc-520c3",
  storageBucket: "chatdsc-520c3.appspot.com",
  messagingSenderId: "771509154862",
  appId: "1:771509154862:web:ea598708c60d6463be9bbf"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;