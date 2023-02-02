import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXaw0doOAmAOiILoahMk1jLa3sIjM9Mqw",
  authDomain: "lamascotafeliz-22241.firebaseapp.com",
  databaseURL: "https://lamascotafeliz-22241-default-rtdb.firebaseio.com",
  projectId: "lamascotafeliz-22241",
  storageBucket: "lamascotafeliz-22241.appspot.com",
  messagingSenderId: "390762257446",
  appId: "1:390762257446:web:3154e1b15b9ef3a3895ae7",
  measurementId: "G-EGNVJQC0MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirebaseApp = ()=> {
  return app
}
