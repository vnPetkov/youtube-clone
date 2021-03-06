import React from "react";
import styles from "./HomeVideo.module.scss";
import numberWithCommas from "../utilities/NumbersFormat";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebaseConfig.js";
import { updateDoc, doc } from "firebase/firestore";

export default function HomeVideo(props) {
  const logged = useSelector((state) => state.userData.logged);
  const curentUserId = useSelector((state) => state.userData.uid);
  const curentUserHistory = useSelector(
    (state) => state.userData.historyVideos
  );

  const dispatch = useDispatch();
  const addHistory = (userId, currentHistory) => {
    !currentHistory.some((e) => e === props.videoId) &&
      (function () {
        dispatch({ type: "HISTORIZE", videoId: props.videoId });
        const userDoc = doc(db, "users", userId);
        const newFields = { historyVideos: [...currentHistory, props.videoId] };
        updateDoc(userDoc, newFields);
      })();
  };



  return (
    <Link
      to={`/watchVideo_page/${props.videoId}/`}
      onClick={() => addHistory(curentUserId, curentUserHistory)}
    >
      <div className={styles.videoCard}>
        <img src={props.img} alt="video poster" />
        <div>
          <Avatar alt={props.channel} src={props.channelImg} style={{marginRight:'10px'}}/>
          <div>
            <h4>{props.title}</h4>
            <p>{props.channel}</p>
            <p>
              {numberWithCommas(props.views)} &#9679; {props.timestamp}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
