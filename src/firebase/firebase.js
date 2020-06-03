import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAPBaC-KJV0nlXHI-tsMt0Df4vG1DdjAtI",
    authDomain: "tabl-9c663.firebaseapp.com",
    databaseURL: "https://tabl-9c663.firebaseio.com",
    projectId: "tabl-9c663",
    storageBucket: "tabl-9c663.appspot.com",
    messagingSenderId: "1018707962108",
    appId: "1:1018707962108:web:32e9dbf983eb7d1a4b4f79",
    measurementId: "G-SVE9MJNCHZ"
};

firebase.initializeApp(config);

export default firebase;