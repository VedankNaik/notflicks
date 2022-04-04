import { initializeApp } from 'firebase/app';
// import 'firebase/firestore';
import { getAuth } from "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: "AIzaSyA-H-oTELqyuCTtEwE4zqtFg63hmsOk_LQ",
  authDomain: "notflicks-c8a80.firebaseapp.com",
  projectId: "notflicks-c8a80",
  storageBucket: "notflicks-c8a80.appspot.com",
  messagingSenderId: "678570001243",
  appId: "1:678570001243:web:315c8bb1e76b5e5679907e",
  measurementId: "G-QC168NXLH7"
};

const firebase = initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

const auth = getAuth(firebase);

export { firebase, auth };
