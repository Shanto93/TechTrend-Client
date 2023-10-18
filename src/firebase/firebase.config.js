// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVD6TswpE7WrOkiOxVmu_grWNZcWPuxr8",
  authDomain: "techtrend-hub.firebaseapp.com",
  projectId: "techtrend-hub",
  storageBucket: "techtrend-hub.appspot.com",
  messagingSenderId: "756913753200",
  appId: "1:756913753200:web:b2d31f6acbeec4adc978b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;