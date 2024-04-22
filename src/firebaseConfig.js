import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjOIIoN8VDzmrkPGbZiCdAW46JpJsGXc0",
  authDomain: "foodblog-adf29.firebaseapp.com",
  projectId: "foodblog-adf29",
  storageBucket: "foodblog-adf29.appspot.com",
  messagingSenderId: "358966688110",
  appId: "1:358966688110:web:f4ed61b997c0776f18697f"
};

export const app = initializeApp(firebaseConfig);