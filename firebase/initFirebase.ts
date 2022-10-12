import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from '@firebase/database';

const firebaseConfig = {
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGING_SENDER_ID,
    // appId: process.env.APP_ID,
    // measurementId: process.env.MEASUREMENT_ID,

    apiKey: "AIzaSyDRYvkx6Bp_qaqeqOwYZHHMC1y8fmjhZPo",
    authDomain: "digest-43201.firebaseapp.com",
    projectId: "digest-43201",
    storageBucket: "digest-43201.appspot.com",
    messagingSenderId: "802832673078",
    appId: "1:802832673078:web:ccfe749490ca64ca32ab97",
    measurementId: "G-BCSZJMX06T"
};

function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(firebaseConfig);
        console.log('Firebase has been init successfully');
    }
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const realDB = getDatabase(app);

export { initFirebase, db, realDB };
