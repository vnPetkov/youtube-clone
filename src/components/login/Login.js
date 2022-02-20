import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.js";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const dispatch = useDispatch();
  let changePath = useNavigate();

  const login = () => {
    const loginFunc = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
      } catch (err) {
        console.log(err.message);
        return false;
      }
      return true;
    };
    loginFunc();
    console.log("suucessful login");
    dispatch({ type: "LOGIN" });
    dispatch({ type: "LOGIN_CLOSED" });
    changePath("/");
  };

  return (
    <div className={styles.form}>
      <img
        src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3"
        alt="google logo"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(event) => setLoginEmail(event.target.value)}
      />
      <input
        type="password"
        name="Password"
        placeholder="Password"
        onChange={(event) => setLoginPassword(event.target.value)}
      />
      <button className={styles.formButtons} onClick={login}>
        Sign in
      </button>
      <br />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
}
