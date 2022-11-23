import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjRzD4mkj_yYdUyT0_3-DE87Vu1IpltJY",
  authDomain: "drone-dji-da86c.firebaseapp.com",
  projectId: "drone-dji-da86c",
  storageBucket: "drone-dji-da86c.appspot.com",
  messagingSenderId: "813330576001",
  appId: "1:813330576001:web:9b653973170d750a015380",
  measurementId: "G-6ZME5CCSBH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
