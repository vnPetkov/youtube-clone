import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./VideoInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebaseConfig.js";
import { updateDoc, doc } from "firebase/firestore";
import numberWithCommas from "../utilities/NumbersFormat";
import ShowMoreText from "react-show-more-text";

export default function VideoInfo(props) {
  function executeOnClick(isExpanded) {
    console.log(isExpanded);
  }



  let videoInfo = props.videoInfo.items[0];
  let channelInfo = props.channelInfo;
  //TODO: da popravq vsichki curent na current
  const logged = useSelector((state) => state.userData.logged);
  const curentUserId = useSelector((state) => state.userData.uid);
  const curentUserLiked = useSelector((state) => state.userData.likedVideos);
  const curentUserDisliked = useSelector(
    (state) => state.userData.dislikedVideos
  );
  const isLiked = curentUserLiked.some((e) => e === videoInfo.id);
  const isDisliked = curentUserDisliked.some((e) => e === videoInfo.id);

  const removeVideo = (array, videoId) => {
    let index = array.indexOf(videoId);
    array.splice(index, 1);
  };
  const updateFirebase = (liked, disliked) => {
    const userDoc = doc(db, "users", curentUserId);
    const newFields = {
      likedVideos: [...liked],
      dislikedVideos: [...disliked],
    };
    updateDoc(userDoc, newFields);
  };

  const dispatch = useDispatch();

  const changeLiked = (currentLiked, currentDisliked) => {
    isLiked
      ? removeVideo(currentLiked, videoInfo.id)
      : currentLiked.push(videoInfo.id);
    isDisliked && removeVideo(currentDisliked, videoInfo.id);

    dispatch({ type: "CHANGE_LIKED", newLikedArr: currentLiked });
    dispatch({ type: "CHANGE_DISLIKED", newDislikedArr: currentDisliked });
    updateFirebase(currentLiked, currentDisliked);
  };
  const changeDisliked = (currentLiked, currentDisliked) => {
    isDisliked
      ? removeVideo(currentDisliked, videoInfo.id)
      : currentDisliked.push(videoInfo.id);
    isLiked && removeVideo(currentLiked, videoInfo.id);

    dispatch({ type: "CHANGE_LIKED", newLikedArr: currentLiked });
    dispatch({ type: "CHANGE_DISLIKED", newDislikedArr: currentDisliked });
    updateFirebase(currentLiked, currentDisliked);
  };

  return (
    <div className={styles.videoInfo}>
      <div className={styles.infoMain}>
        <h5>{videoInfo.snippet.title}</h5>
        <div>
          <p>
            {numberWithCommas(videoInfo.statistics.viewCount)} views &#9679;
            {videoInfo.snippet.publishedAt}
          </p>

          <div>
            <span
              className={styles.likesCountSpan}
              onClick={() => changeLiked(curentUserLiked, curentUserDisliked)}
            >
              {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
              <p>
                {isLiked
                  ? numberWithCommas(videoInfo.statistics.likeCount + 1)
                  : numberWithCommas(videoInfo.statistics.likeCount)}
              </p>
            </span>

            <span
             className={styles.likesCountSpan}
              onClick={() =>
                changeDisliked(curentUserLiked, curentUserDisliked)
              }
            >
              {isDisliked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
              <p>DISLIKE</p>
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
                alt={videoInfo.snippet.channelTitle}
                src={channelInfo.items[0].snippet.thumbnails.default.url}
                sx={{ width: 48, height: 48 }}
              />
              <p>
                <a href="...">{videoInfo.snippet.channelTitle}</a> <br />
                {numberWithCommas(channelInfo.items[0].statistics.subscriberCount)} subscribers
              </p>
            </div>
          </Link>

          <div className={styles.channelButtons}>
            <Button variant="outlined" color="primary">
              JOIN
            </Button>
            <Button variant="contained" color="error">
              SUBSCRIBE
            </Button>
          </div>
        </div>
        <ShowMoreText
          /* Default options */
          lines={1}
          more="Show more"
          less="Show less"
          className={styles.ShowMore}
          anchorClass={styles.ShowMore}
          onClick={executeOnClick}
          expanded={false}
          width={1300}
          truncatedEndingComponent={"... "}
        >
          <p className={styles.description}>{videoInfo.snippet.description}</p>
        </ShowMoreText>

      </div>
    </div>
  );
}
