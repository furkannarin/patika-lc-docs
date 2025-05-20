import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection, doc } from "firebase/firestore";

import state from "../state";

const firebaseConfig = {
  apiKey: "AIzaSyDhRNNDnBys5PYcYPkLlzZQ4XkIYP_gYCM",
  authDomain: "movie-app-patika.firebaseapp.com",
  projectId: "movie-app-patika",
  storageBucket: "movie-app-patika.firebasestorage.app",
  messagingSenderId: "123297294043",
  appId: "1:123297294043:web:47384d65f1e532dbe80efe"
};

const firebaseModules = {
    app: null,
    auth: null,
    db: null
}

if (!firebaseModules.app) {
    firebaseModules.app = initializeApp(firebaseConfig);
    firebaseModules.auth = getAuth(firebaseModules.app);
    firebaseModules.db = getFirestore(firebaseModules.app);
}

async function login(email, password) {
    try {
        if (!email || !password) return null;

        const response = await signInWithEmailAndPassword(firebaseModules.auth, email, password);
        if (response.user && !response.user.uid) {
            console.error('INVALID USER ID');
            return null;
        }

        return response.user;
    } catch (e) {
        console.error('SOMETHING WENT WRONG WHEN SIGNING IN', e)
    }
}

async function register(email, password, city) {
    try {
        if (!email || !password) return null;

        const response = await createUserWithEmailAndPassword(firebaseModules.auth, email, password);

        if (response.user && !response.user.uid) {
            console.error('COULD NOT CREATE THE USER');
            return null;
        }

        const userDocument = await addDoc(collection(firebaseModules.db, 'users1'), {
            email,
            password,
            city
        })

        console.log(userDocument.id)
        state.userData = response.user;
        return true;
    } catch (e) {
        console.error('SOMETHING WENT WRONG WHEN REGISTERING', e)
    }
}

export default {
    login,
    register,
    firebaseModules,
}
