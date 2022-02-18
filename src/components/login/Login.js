import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <div class={styles.form}>
      <img
        src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3"
        alt="google logo"
      />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="Password" placeholder="Password" />
      <Link to={"/"} onClick={handleLogin}>
        Sign in
      </Link>
      <br />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
}
