import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";

export default function LoginUser() {
  const auth = getAuth();
  const dispatch = useDispatch();
  let changePath = useNavigate();

  return async (email, password) => {
    // const errMessage = document.querySelector("#logErr");
    // errMessage.innerHTML = "";
    // if (email === "" || password === "") {
    //   errMessage.innerHTML = "The fields are not filled!";
    //   return;
    // }
    //TODO: може тази проверка да се изнесе в редукс май

    const user = await signInWithEmailAndPassword(auth, email, password);

    localStorage.setItem("user", JSON.stringify([email, password]));

    const userDocRef = doc(db, "users", user.user.uid);
    const docSnap = await getDoc(userDocRef);
    let dataBaseHistory = docSnap.data().historyVideos;
    let dataBaseLiked = docSnap.data().likedVideos;
    let dataBaseDisliked = docSnap.data().dislikedVideos;
    let dataBaseUploaded = docSnap.data().uploadedVideos;

    dispatch({
      type: "LOGIN",
      profileUid: user.user.uid,
      userName: user.user.displayName,
      image: user.user.photoURL,
      history: dataBaseHistory,
      liked: dataBaseLiked,
      disliked: dataBaseDisliked,
      uploaded: dataBaseUploaded,
    });

    changePath("/");
    dispatch({ type: "LOGIN_CLOSED" });
  };
}
