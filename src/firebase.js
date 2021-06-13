import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDnmTFsDuY1-hjwwR8ZrOazIAQoYTnsQF0",
    authDomain: "netflix-clone-93ba1.firebaseapp.com",
    projectId: "netflix-clone-93ba1",
    storageBucket: "netflix-clone-93ba1.appspot.com",
    messagingSenderId: "248842047577",
    appId: "1:248842047577:web:fe2ea79e0dedfd2adde148"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { auth}
  export default db;