import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA6qChimnN-IuqH--uKK09_Xhg38EP0YBg",
  authDomain: "devfestindia2020.firebaseapp.com",
  databaseURL: "https://devfestindia2020.firebaseio.com",
  projectId: "devfestindia2020",
  storageBucket: "devfestindia2020.appspot.com",
  messagingSenderId: "394032196909",
  appId: "1:394032196909:web:e9bcb020572abcd64e77a4",
};

firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn("DB offline support not available");
  });
export default {
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  firebase: firebase,
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
};
