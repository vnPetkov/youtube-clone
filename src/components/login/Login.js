import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import LoginUser from "../utilities/LogInUser";
import header_logo from "../../images/header_logo.svg";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let loginFunc = LoginUser();

  return (
    <div className={styles.form}>
      <img src={header_logo} alt="google logo" />
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
      <button
        className={styles.formButtons}
        onClick={() => {
          loginFunc(loginEmail, loginPassword);
        }}
      >
        Sign in
      </button>
      <p></p>
      <br />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
}
