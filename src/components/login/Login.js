import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import LoginUser from "../utilities/LogInUser";
import header_logo from "../../images/header_logo.svg";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const loginFunc = LoginUser();
  return (
    <div className={styles.form}>
      <Link to={"/"}>
        <img src={header_logo} alt="google logo" />
      </Link>
      <input
        type="email"
        name="email"
        maxLength="20"
        placeholder="Email"
        onChange={(event) => setLoginEmail(event.target.value)}
      />
      <input
        type="password"
        name="Password"
        maxLength="15"
        placeholder="Password"
        onChange={(event) => setLoginPassword(event.target.value)}
      />
      <button
        className={styles.formButtons}
        onClick={() => {
          if (loginEmail === "" || loginPassword === "") {
            setErrMessage("The fields are not filled!");
          } else {
            loginFunc(loginEmail, loginPassword).catch((err) =>
              setErrMessage("Invalid username or password!")
            );
          }
        }}
      >
        Sign in
      </button>
      <p id="logErr">{errMessage && errMessage}</p>
      <br />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
}
