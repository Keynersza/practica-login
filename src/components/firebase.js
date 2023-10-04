import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCwm2EyEysyTXrsPeTf14wuoxYSsdjJegs",
  authDomain: "login-react-5902f.firebaseapp.com",
  projectId: "login-react-5902f",
  storageBucket: "login-react-5902f.appspot.com",
  messagingSenderId: "870705657977",
  appId: "1:870705657977:web:b2f6505224e5380bf37ca8"
};

const app = initializeApp(firebaseConfig);
export const  firestore = getFirestore(app)