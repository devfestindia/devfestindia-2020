import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9g_lhixwvpGFwxOCSJkuUlbxlbFjM_Oc",
  authDomain: "cloudorbit.firebaseapp.com",
  databaseURL: "https://cloudorbit.firebaseio.com",
  projectId: "cloudorbit",
  storageBucket: "cloudorbit.appspot.com",
  messagingSenderId: "387433358364",
  appId: "1:387433358364:web:fafd08a64d30a21b5aabd9"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  firebase:firebase
};