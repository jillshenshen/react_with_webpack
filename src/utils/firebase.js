import firebase from 'firebase/compat/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBShJLwL-X1Rr4hi9W0mkJTIGaOGuVKH-s",
    authDomain: "react-with-webpack.firebaseapp.com",
    projectId: "react-with-webpack",
    storageBucket: "react-with-webpack.appspot.com",
    messagingSenderId: "427105104826",
    appId: "1:427105104826:web:1cfffc2890c835a2d2a383",
    measurementId: "G-EMCMQCM25V"
  };

export const app=firebase.initializeApp(firebaseConfig)

export const db=getFirestore(app)


