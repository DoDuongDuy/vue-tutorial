import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDvXYsem3qhYSpG13tvcfDWfdxWIYojPJQ",
    authDomain: "duy-blog.firebaseapp.com",
    projectId: "duy-blog",
    storageBucket: "duy-blog.appspot.com",
    messagingSenderId: "320968433903",
    appId: "1:320968433903:web:ad3a343155d8d7b12b3b1a"
  };
  // init firebase 
firebase.initializeApp(firebaseConfig)
//init firestore service 
const projectFirestore = firebase.firestore()
export {projectFirestore}