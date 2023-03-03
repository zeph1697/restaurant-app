import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAuUuYBR1r_49rMfkucfPAnBhDLM8acoVE",
    authDomain: "restaurantapp-3e06d.firebaseapp.com",
    databaseURL: "https://restaurantapp-3e06d-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-3e06d",
    storageBucket: "restaurantapp-3e06d.appspot.com",
    messagingSenderId: "441839435476",
    appId: "1:441839435476:web:d05f0fd5fce63ad33dc541"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};