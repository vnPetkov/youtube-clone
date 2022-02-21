import React from "react";
import styles from "./HomeVideo.module.scss";
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
    console.log("nashivane v istoriq");
    dispatch({ type: "HISTORIZE", videoId: props.videoId });

    const userDoc = doc(db, "users", userId);
    const newFields = { historyVideos: [...currentHistory, props.videoId] };
    updateDoc(userDoc, newFields);
  };

  return (
    <Link
    channelId={props.channelId}
      to={`/watchVideo_page/${props.videoId}/${props.title}/${props.channel}/${props.views}/${props.timestamp}/${props.likes}/${props.subscribers}`} //${props.description}
      onClick={() => addHistory(curentUserId, curentUserHistory)}
    >
      <div className={styles.videoCard}>
        <img src={props.img} alt="video poster" />
        <div>
          <Avatar alt={props.channel} src={props.channelImg} />
          <div>
            <h4>{props.title}</h4>
            <p>{props.channel}</p>
            <p>
              {props.views} &#9679; {props.timestamp}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
