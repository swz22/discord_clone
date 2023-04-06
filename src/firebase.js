import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5UvNkqaa_uqpI79-SRtEahMSRVeyRL7U",
  authDomain: "chatprojectdsc.firebaseapp.com",
  projectId: "chatprojectdsc",
  storageBucket: "chatprojectdsc.appspot.com",
  messagingSenderId: "1044488375663",
  appId: "1:1044488375663:web:dc949c780220c431396c9a"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;