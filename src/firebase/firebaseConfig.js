import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_7IYSyNXzIfLjkWLAjF-R7g5W8pdAcS8",
  authDomain: "clone-340802.firebaseapp.com",
  projectId: "youtube-clone-340802",
  storageBucket: "youtube-clone-340802.appspot.com",
  messagingSenderId: "437209649236",
  appId: "1:437209649236:web:ac0ef9d803130828d31dc1",
  measurementId: "G-S8MZG69M0E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
