import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNxH2fKJUPkCeHHvIOfCQUFXIzwsT7Njw",
    authDomain: "discord-clone-fdf58.firebaseapp.com",
    projectId: "discord-clone-fdf58",
    storageBucket: "discord-clone-fdf58.appspot.com",
    messagingSenderId: "309961678717",
    appId: "1:309961678717:web:90efd4b45e0a9fa48e7614"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;