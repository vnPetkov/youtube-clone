import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import LoginUser from "../utilities/LogInUser";
import header_logo from "../../images/header_logo.svg";
import { useDispatch } from "react-redux";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // let loginFunc;

  // let errMessage = document.querySelector("#logErr");
  // if (loginEmail === "" || loginPassword === "") {
  //   errMessage.innerHTML = "The fields are not filled!";
  // } else {
  //   loginFunc = LoginUser();
  // }
  const dispatch = useDispatch();
  const loginFunc = LoginUser();
  return (
    <div className={styles.form}>
      <Link to={"/"} onClick={dispatch({ type: "LOGIN_OPENED" })}>
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
          loginFunc(loginEmail, loginPassword);
        }}
      >
        Sign in
      </button>
      <p id="logErr"></p>
      <br />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
}
