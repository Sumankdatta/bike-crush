// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzvVjVrfgJhl1Y331qjTgPzXFgYgDcwUQ",
  authDomain: "bike-sale-97ac2.firebaseapp.com",
  projectId: "bike-sale-97ac2",
  storageBucket: "bike-sale-97ac2.appspot.com",
  messagingSenderId: "975123577886",
  appId: "1:975123577886:web:a37dae7d575c112689820f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;