import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebase-config.json';

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
