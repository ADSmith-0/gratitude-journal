import { env } from '$env/dynamic/public';
import { initializeApp, getApp, getApps, deleteApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const config = {
    apiKey: env.PUBLIC_FIREBASE_API_KEY,
    authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: env.PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.PUBLIC_FIREBASE_APP_ID,
    measurementId: env.PUBLIC_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(config);
} else {
    firebaseApp = getApp();
    deleteApp(firebaseApp);
    firebaseApp = initializeApp(config);
}

const app = getApp();
const auth = getAuth(firebaseApp);
const db = getFirestore();

export { app, auth, db };