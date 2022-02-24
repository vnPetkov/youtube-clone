import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.js";
import { db } from "../../firebase/firebaseConfig.js";
import { collection, setDoc, doc } from "firebase/firestore";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(user.user.uid);
    await setDoc(doc(db, "users", user.user.uid), {
      historyVideos: [],
      likedVideos: [],
      dislikedVideos: [],
      uploadedVideos: [],
    });
  };

  return (
    <div class={styles.form}>
      <img
        src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3"
        alt="google logo"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(event) => setRegisterEmail(event.target.value)}
      />
      <input
        type="password"
        name="Password"
        placeholder="Password"
        onChange={(event) => setRegisterPassword(event.target.value)}
      />
      <button className={styles.formButtons} onClick={register}>
        Register
      </button>
      <br />
      <Link to={"/login"}>Sign in</Link>
    </div>
  );
}
