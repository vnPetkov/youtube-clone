import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebaseConfig.js";
import { updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function HorizontalCard({
  videoId,
  img,
  user,
  title,
  desc,
  views,
  uploaded,
  currentClass,
  channelId,
}) {
  const curentUserId = useSelector((state) => state.userData.uid);
  const curentUserHistory = useSelector(
    (state) => state.userData.historyVideos
  );
  const dispatch = useDispatch();
  const addHistory = (userId, currentHistory) => {
    !currentHistory.some((e) => e === videoId) &&
      (function () {
        dispatch({ type: "HISTORIZE", videoId: videoId });
        const userDoc = doc(db, "users", userId);
        const newFields = { historyVideos: [...currentHistory, videoId] };
        updateDoc(userDoc, newFields);
      })();
  };

  return (
    <Link
      to={`/watchVideo_page/${videoId}/`}
      key={videoId}
      onClick={() => addHistory(curentUserId, curentUserHistory)}
    >
      <div className={currentClass}>
        <img src={img} alt="video poster" />
        <div>
          <h3>{title}</h3>
          <div>
            {/* <p>{views} &#9679;</p> */}
            <p>{uploaded}</p>
          </div>
          <div>
            {/* <img src={userPic} alt="user pic" /> */}
            <Link to={`/channel/${channelId}`}>{user}</Link>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
