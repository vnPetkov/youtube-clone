import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

export default function LoginUser() {
  const auth = getAuth();
  const dispatch = useDispatch();
  let changePath = useNavigate();

  return async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);

    localStorage.setItem("user", JSON.stringify([email, password]));

    const userDocRef = doc(db, "users", user.user.uid);
    const docSnap = await getDoc(userDocRef);
    let dataBaseHistory = docSnap.data().historyVideos;
    let dataBaseLiked = docSnap.data().likedVideos;
    let dataBaseDisliked = docSnap.data().dislikedVideos;
    let dataBaseUploaded = docSnap.data().uploadedVideos;
    let dataBaseProfileImg = docSnap.data().profileImg;

    const commentsCollRef = query(collection(db, "comments"));
    const commentsCollSnapshot = await getDocs(commentsCollRef);
    commentsCollSnapshot.forEach((e) =>
      dispatch({ type: "ADD_VIDEO_COMMENTS", newVideoComments: e.data() })
    );

    dispatch({
      type: "LOGIN",
      profileUid: user.user.uid,
      userName: user.user.displayName,
      image: dataBaseProfileImg,
      history: dataBaseHistory,
      liked: dataBaseLiked,
      disliked: dataBaseDisliked,
      uploaded: dataBaseUploaded,
    });

    changePath("/");
    dispatch({ type: "LOGIN_CLOSED" });
  };
}
