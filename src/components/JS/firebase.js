import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyDL_CM4dyBhwf5wutVsZbccDj9Wwuf0xfI",
  authDomain: "graduation-svelte-firestore.firebaseapp.com",
  projectId: "graduation-svelte-firestore",
  storageBucket: "graduation-svelte-firestore.appspot.com",
  messagingSenderId: "620944434603",
  appId: "1:620944434603:web:2a65197b6f5d189251deee"
};


firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore();