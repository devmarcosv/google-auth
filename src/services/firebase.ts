import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjqdLLnkwnZKntMo-d44rh015j_DOLuIk",
  authDomain: "signin-2087a.firebaseapp.com",
  projectId: "signin-2087a",
  storageBucket: "signin-2087a.appspot.com",
  messagingSenderId: "317222136240",
  appId: "1:317222136240:web:422b1f34f4de05e3ba0e75"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);