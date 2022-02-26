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

    const user = await signInWithEmailAndPassword(auth, email, password);

    localStorage.setItem("user", JSON.stringify([email, password]));

    console.log(user);
    const userDocRef = doc(db, "users", user.user.uid);
    const docSnap = await getDoc(userDocRef);
    let dataBaseHistory = docSnap.data().historyVideos;
    let dataBaseLiked = docSnap.data().likedVideos;
    let dataBaseDisliked = docSnap.data().dislikedVideos;
    let dataBaseUploaded = docSnap.data().uploadedVideos;

    const q = query(collection(db, "comments"));
    //TODO: ima opciq za durpane po uslovie, moje da se napravi da ne se durpata vsichki klipove a samo tozi koito sega e otvoren za gledane

    const querySnapshot = await getDocs(q);
    //let databaseComments = querySnapshot.map((doc) => doc.data());
    querySnapshot.forEach((doc) => console.log("daaaaaaaaaaa : ", doc.data()));
    console.log(user.user.photoURL);

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
    dispatch({ type: "LOGIN_CLOSED" });
    changePath("/");
  };
}
