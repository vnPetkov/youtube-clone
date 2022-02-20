import React from "react";
import { authentication } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const login = () => async (dispatch) => {
  console.log("activate");
  const provider = new GoogleAuthProvider();
  signInWithPopup(authentication, provider)
    .then((resp) => console.log(resp))
    .catch((err) => {
      console.log(err);
    });
};
