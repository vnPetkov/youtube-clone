import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link,useParams } from "react-router-dom";

import styles from "./VideoInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebaseConfig.js";
import { updateDoc, doc } from "firebase/firestore";

export default function VideoInfo(props) {
  let videoInfo = props.videoInfo.items[0];
  let channelInfo = props.channelInfo
  console.log(videoInfo)
  
  const logged = useSelector((state) => state.userData.logged);
  const curentUserId = useSelector((state) => state.userData.uid);
  const curentUserLiked = useSelector((state) => state.userData.likedVideos);

  const dispatch = useDispatch();
  const like = (userId, currentLiked) => {
    console.log("nashivane v liked");
    dispatch({ type: "LIKE", videoId: props.id });

    const userDoc = doc(db, "users", userId);
    const newFields = { likedVideos: [...currentLiked, props.id] };
    updateDoc(userDoc, newFields);
  };

  return (
    <div className={styles.videoInfo}>
      <div className={styles.infoMain}>
        <h5>{videoInfo.snippet.title}</h5>
        <div>
          <p>
            {videoInfo.statistics.viewCount} &#9679; гледания {videoInfo.snippet.publishedAt}
          </p>

          <div>
            <span onClick={() => like(curentUserId, curentUserLiked)}>
              <ThumbUpOutlinedIcon />

              <p>{videoInfo.statistics.likeCount}</p>
            </span>

            <span>
              <ThumbDownOutlinedIcon />
              <p>НЕХАРЕСВАНЕ</p>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="infoChannel">

          <Link to={`/channel/${videoInfo.snippet.channelId}/`}>
            <div className={styles.channelInformation}>
              <Avatar
                className={styles.avatar}
                alt={videoInfo.snippet.channelTitlel}
                src={channelInfo.items[0].snippet.thumbnails.default.url}
                sx={{ width: 48, height: 48 }}
              />
              <p>
                <a href="...">{videoInfo.snippet.channelTitle}</a> <br />
                 {channelInfo.items[0].statistics.subscriberCount} абоната
              </p>
            </div>
          </Link>

          <div className={styles.channelButtons}>
            <Button variant="outlined" color="primary">
              СТАНЕТЕ ЧЛЕН
            </Button>
            <Button variant="contained" color="error">
              АБОНИРАНЕ
            </Button>
          </div>
        </div>

        <p className={styles.description}>{videoInfo.snippet.description}</p>
      </div>
    </div>
  );
}
