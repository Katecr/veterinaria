import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBci6ogwhlwOMlT-OcKRIiJ16N2eFJFHaM",
    authDomain: "veterinary-ff8ec.firebaseapp.com",
    projectId: "veterinary-ff8ec",
    storageBucket: "veterinary-ff8ec.appspot.com",
    messagingSenderId: "775947372585",
    appId: "1:775947372585:web:c88f68d20b519f0044b438"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)