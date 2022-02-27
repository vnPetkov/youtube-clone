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
import { useDispatch } from "react-redux";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerDisplayName, setRegisterDisplayName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPassword2, setRegisterPassword2] = useState("");
  const [currentErr, setCurrentErr] = useState("");

  const auth = getAuth();
  const dispatch = useDispatch();

  const register = async () => {
    if (
      registerEmail === "" ||
      registerDisplayName === "" ||
      registerPassword === ""
    ) {
      setCurrentErr("The fields are not filled!");
      return;
    } else if (registerPassword.length < 6) {
      setCurrentErr("Password must contain more then 5 characters!");
      return;
    } else if (registerPassword !== registerPassword2) {
      setCurrentErr("Passwords must match!");
      return;
    } else if (!/^[A-Za-z0-9]*$/.test(registerPassword)) {
      setCurrentErr("Password must contain only letters and numbers!");
      return;
    } else if (
      [registerEmail, registerDisplayName, registerPassword].some(
        (e) => e.indexOf(" ") !== -1
      )
    ) {
      setCurrentErr("The fields must not contain whitespaces");
      return;
    }

    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    ).catch((err) => {
      if (err.message.includes("already")) {
        setCurrentErr("This email is alredy taken!");
      } else if (err.message.includes("invalid")) {
        setCurrentErr("Please enter valid email!");
      }
    });
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
    document.getElementById("regForm").reset();

    setCurrentErr("Your registration is successful!");
  };

  return (
    <div className={styles.form}>
      <Link to={"/"} onClick={dispatch({ type: "LOGIN_OPENED" })}>
        <img src={header_logo} alt="google logo" />
      </Link>
      <form id="regForm">
        <input
          type="email"
          name="email"
          maxLength="20"
          placeholder="Email"
          onChange={(event) => setRegisterEmail(event.target.value.trim())}
        />
        <input
          type="text"
          name="name"
          maxLength="15"
          placeholder="Your name"
          onChange={(event) =>
            setRegisterDisplayName(event.target.value.trim())
          }
        />
        <input
          type="password"
          name="Password"
          maxLength="15"
          placeholder="Password"
          onChange={(event) => setRegisterPassword(event.target.value.trim())}
        />
        <input
          type="password"
          name="Password2"
          maxLength="15"
          placeholder="Repeat password"
          onChange={(event) => setRegisterPassword2(event.target.value.trim())}
        />
      </form>
      <button className={styles.formButtons} onClick={register}>
        Register
      </button>
      <p id="regErr">{currentErr && currentErr}</p>
      <br />
      <Link to={"/login"}>Sign in</Link>
    </div>
  );
}
