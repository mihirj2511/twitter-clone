import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyC_47EGhMqHVKhfOca52jp2VN6Vxa_cdtM",
    authDomain: "twitter-clone-8c9f9.firebaseapp.com",
    projectId: "twitter-clone-8c9f9",
    storageBucket: "twitter-clone-8c9f9.appspot.com",
    messagingSenderId: "703311685969",
    appId: "1:703311685969:web:238155bf758c7378110b70",
    measurementId: "G-WVZEG7SXSF"
  });
  
const db = getFirestore(firebaseApp);

export {db};