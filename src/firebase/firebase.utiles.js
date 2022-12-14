import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCoC3jmKy3-fxwe6RI41Lsz7EFFx_EL03E",
    authDomain: "crwn-db-d67e0.firebaseapp.com",
    projectId: "crwn-db-d67e0",
    storageBucket: "crwn-db-d67e0.appspot.com",
    messagingSenderId: "67563114624",
    appId: "1:67563114624:web:9c0eba01be112829305665",
    measurementId: "G-LYRMSKGL96"
  };

export const createUserProfilDocument = async (userAuth, additinalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additinalData
            })
        }catch (error)
            {
                console.log('error creating user', error.message)
            }

        }

        return userRef

}
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;