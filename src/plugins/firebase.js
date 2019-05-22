import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyDbG96x2Ioai3jOUjL92JxARXx2oUQDG9Y',
    authDomain: 'codemaker-9bed7.firebaseapp.com',
    databaseURL: 'https://codemaker-9bed7.firebaseio.com',
    projectId: 'codemaker-9bed7',
    storageBucket: 'codemaker-9bed7.appspot.com',
    messagingSenderId: '535987904832',
    appId: '1:535987904832:web:17d1068764790a27'
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
