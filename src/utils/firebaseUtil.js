import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { toastSuccessNotify, toastErrorNotify } from "./toastNotify";

const app = initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  databaseURL: process.env.REACT_APP_databaseURL,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// create new user
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// read exist user
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// logout process
export const logout = () => {
  signOut(auth);
  toastSuccessNotify("We'll miss you 😔");
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      toastSuccessNotify("Welcome 🎉");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
};
