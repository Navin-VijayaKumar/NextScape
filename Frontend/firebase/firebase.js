import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDeHKAmrZ_71pn-5q2Ues18Y09g2aZEpXk",
  authDomain: "nextscape-17ca6.firebaseapp.com",
  projectId: "nextscape-17ca6",
  storageBucket: "nextscape-17ca6.firebasestorage.app",
  messagingSenderId: "160853379070",
  appId: "1:160853379070:web:c5a656e6015b1efa5022af",
  measurementId: "G-JYKFVS5XM7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app,auth};