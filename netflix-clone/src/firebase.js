import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAVQtAeSnylXIhWqpNEzKB3_v6PoyrabHA",
  authDomain: "netflix-clone-c22d4.firebaseapp.com",
  projectId: "netflix-clone-c22d4",
  storageBucket: "netflix-clone-c22d4.appspot.com",
  messagingSenderId: "536229336900",
  appId: "1:536229336900:web:66e454dba4107739ffe911"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const firestore = getFirestore();
export {auth};

export function signup(email, password){
  return createUserWithEmailAndPassword(auth , email, password);
}

export function signin(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}
