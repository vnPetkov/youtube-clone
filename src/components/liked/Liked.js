import styles from "./Liked.module.scss";
import HorizontalCard from "../cards/HorizontalCard";
import card_styles from "../cards/HorizontalCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import SignInButton from "../buttons/SignInButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FetchVideosById from "../utilities/FetchVideosById";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig.js";
import { updateDoc, doc } from "firebase/firestore";
import LikeDislikeBtn from "../buttons/Like-dislikeBtn";

export default function History() {
  const [likedVideos, setLikedVideos] = useState([]);
  let content = null;
  const logged = useSelector((state) => state.userData.logged);
  const likedArr = useSelector((state) => state.userData.likedVideos);
  const curentUserId = useSelector((state) => state.userData.uid);
  const curentUserLiked = useSelector((state) => state.userData.likedVideos);
  const curentUserDisliked = useSelector(
    (state) => state.userData.dislikedVideos
  );
  const isLiked = (videoId) => {
    return curentUserLiked.some((e) => e === videoId);
  };
  const isDisliked = (videoId) => {
    return curentUserDisliked.some((e) => e === videoId);
  };

  useEffect(() => {
    logged &&
      FetchVideosById(likedArr).then((result) => setLikedVideos(result));
  }, []);

  const dispatch = useDispatch();

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

  const changeDisliked = (currentLiked, currentDisliked, videoId) => {
    isDisliked(videoId)
      ? removeVideo(currentDisliked, videoId)
      : currentDisliked.push(videoId);
    isLiked(videoId) && removeVideo(currentLiked, videoId);

    dispatch({ type: "CHANGE_LIKED", newLikedArr: currentLiked });
    dispatch({ type: "CHANGE_DISLIKED", newDislikedArr: currentDisliked });
    updateFirebase(currentLiked, currentDisliked);
  };

  logged
    ? (content = (
        <>
          <h4>История на гледане</h4>
          <div className={styles.historyCards}>
            {likedVideos &&
              likedVideos.map((e) => {
                return (
                  <>
                    <HorizontalCard
                      key={e.id}
                      img={e.snippet.thumbnails.high.url}
                      user={e.snippet.channelTitle}
                      title={e.snippet.title}
                      currentClass={card_styles.history_card}
                    />
                    <span
                      currentCardId={e.id}
                      className={styles.likesCountSpan}
                      onClick={
                        logged
                          ? (event) =>
                              changeDisliked(
                                curentUserLiked,
                                curentUserDisliked,
                                event.target.currentCardId
                              )
                          : null
                      }
                    >
                      <LikeDislikeBtn
                        currentCardId={e.id}
                        dislikedState={(event) => {
                          isDisliked(event.target.currentCardId);
                          console.log("button123", event.target.currentCardId);
                        }}
                      />
                      <p>DISLIKE</p>
                    </span>

                    <hr />
                  </>
                );
              })}
          </div>
        </>
      ))
    : (content = (
        <div className={styles.HistorySignedOut}>
          <ThumbUpOffAltIcon className={styles.rewind} />
          <h2>You are not logged in. Login to see your liked videos!</h2>
          <SignInButton />
        </div>
      ));

  return (
    <div className={styles.historyContainer}>
      <div className={styles.HistorySignedIn}>{content}</div>
    </div>
  );
}
