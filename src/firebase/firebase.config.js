// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Meari2Bt9o4-9sAaMJJATD_8tkqRhLM",
  authDomain: "practice-51-949e4.firebaseapp.com",
  projectId: "practice-51-949e4",
  storageBucket: "practice-51-949e4.appspot.com",
  messagingSenderId: "859301041155",
  appId: "1:859301041155:web:b534de5c69f700db852a36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth