import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import firebaseConfig from './firebase-config.json';

initializeApp(firebaseConfig);

const auth = getAuth();

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

const onAuthStateChanged = (callback: (user: User | null) => void) => {
  const unsubscribe = auth.onAuthStateChanged((user) => callback(user));

  return () => unsubscribe();
};

const signOut = () => {
  return auth.signOut();
};

export { googleSignIn, onAuthStateChanged, signOut };
