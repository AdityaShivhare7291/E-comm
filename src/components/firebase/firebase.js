import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsLhLCl0exUxcIEJ8vr3TYOjs_HiCPMXo", 
  authDomain: "app-intern-a9bf9.firebaseapp.com", 
  projectId: "app-intern-a9bf9", 
  storageBucket: "app-intern-a9bf9.appspot.com", 
  messagingSenderId: "189908873337", 
  appId: "1:189908873337:web:fd18d9664e08f4dcab24a8", 
  measurementId: "G-FBKBSM2XG7" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
