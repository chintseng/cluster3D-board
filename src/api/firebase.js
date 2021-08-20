import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCdxzU51kcfMTys6TG2WKABrUZnTnBW0rI',
  databaseURL: 'https://d-annotation.firebaseio.com',
  authDomain: 'd-annotation.firebaseapp.com',
  projectId: 'd-annotation',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
