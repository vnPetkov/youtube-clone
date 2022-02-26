import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import header_logo from "../../images/header_logo.svg";

import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase/firebaseConfig.js";
import { setDoc, doc } from "firebase/firestore";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerDisplayName, setRegisterDisplayName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPassword2, setRegisterPassword2] = useState("");

  const auth = getAuth();

  const register = async () => {
    const errMessage = document.querySelector("#regErr");
    errMessage.innerHTML = "";
    if (
      registerEmail === "" ||
      registerDisplayName === "" ||
      registerPassword === ""
    ) {
      errMessage.innerHTML = "The fields are not filled!";
      return;
    } else if (registerPassword.length < 6) {
      errMessage.innerHTML = "Password must contain more then 5 characters!";
      return;
    } else if (registerPassword !== registerPassword2) {
      errMessage.innerHTML = "Passwords must match!";
      return;
    } else if (!/^[A-Za-z0-9]*$/.test(registerPassword)) {
      errMessage.innerHTML = "Password must contain only letters and numbers!";
      return;
    } else if (
      [registerEmail, registerDisplayName, registerPassword].some(
        (e) => e.indexOf(" ") !== -1
      )
    ) {
      errMessage.innerHTML = "The fields must not contain whitespaces";
      return;
    }

    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    ).catch((err) => (errMessage.innerHTML = err.message));
    updateProfile(auth.currentUser, {
      displayName: registerDisplayName,
      photoURL:
        "https://img.favpng.com/6/14/19/computer-icons-user-profile-icon-design-png-favpng-vcvaCZNwnpxfkKNYzX3fYz7h2.jpg",
    });
    console.log(user.user.uid);
    await setDoc(doc(db, "users", user.user.uid), {
      historyVideos: [],
      likedVideos: [],
      dislikedVideos: [],
      uploadedVideos: [],
    });
    //document.getAnimations("regForm").reset();
    errMessage.innerHTML = "Your registration is successful!";
  };

  return (
    <div className={styles.form}>
      <img src={header_logo} alt="google logo" />
      <form id="regForm">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(event) => setRegisterEmail(event.target.value.trim())}
        />
        <input
          type="text"
          name="email"
          placeholder="Your name"
          onChange={(event) =>
            setRegisterDisplayName(event.target.value.trim())
          }
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={(event) => setRegisterPassword(event.target.value.trim())}
        />
        <input
          type="password"
          name="Password2"
          placeholder="Repeat password"
          onChange={(event) => setRegisterPassword2(event.target.value.trim())}
        />
      </form>
      <button className={styles.formButtons} onClick={register}>
        Register
      </button>
      <p id="regErr"></p>
      <br />
      <Link to={"/login"}>Sign in</Link>
    </div>
  );
}
