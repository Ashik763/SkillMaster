// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCDpF1ZRX5Z7nNsQOjhMTbkk8cnwBYe_hk",
//   authDomain: "skillify763.firebaseapp.com",
//   projectId: "skillify763",
//   storageBucket: "skillify763.appspot.com",
//   messagingSenderId: "520053446712",
//   appId: "1:520053446712:web:b96e39daed7e1ce089aecd"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;