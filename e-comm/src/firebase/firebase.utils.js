import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyANk49ws0tsTG-bOsaDCDMdUmdWAlI4yn8",
  authDomain: "megaecom-3147b.firebaseapp.com",
  projectId: "megaecom-3147b",
  storageBucket: "megaecom-3147b.appspot.com",
  messagingSenderId: "1057654136534",
  appId: "1:1057654136534:web:f35029f9f539d1d115f377"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;