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
  const logged = useSelector((state) => state.userData.logged);
  const curentUserId = useSelector((state) => state.userData.uid);
  const curentUserLiked = useSelector((state) => state.userData.likedVideos);
  const curentUserDisliked = useSelector(
    (state) => state.userData.dislikedVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    logged &&
      FetchVideosById(curentUserLiked).then((result) => setLikedVideos(result));
  }, [curentUserLiked]);

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
    removeVideo(currentLiked, videoId);
    currentDisliked.push(videoId);

    dispatch({ type: "CHANGE_LIKED", newLikedArr: currentLiked });
    dispatch({ type: "CHANGE_DISLIKED", newDislikedArr: currentDisliked });
    updateFirebase(currentLiked, currentDisliked);
  };

  return (
    <div className={styles.historyContainer}>
      <div className={styles.HistorySignedIn}>
        {logged ? (
          <>
            <div className={styles.historyCards}>
              {likedVideos &&
                likedVideos.map((e) => {
                  return (
                    <>
                      <HorizontalCard
                        key={e.id}
                        videoId={e.id}
                        img={e.snippet.thumbnails.high.url}
                        user={e.snippet.channelTitle}
                        title={e.snippet.title}
                        currentClass={card_styles.history_card}
                      />
                      <span
                        vidid={e.id}
                        className={styles.likesCountSpan}
                        onClick={() =>
                          changeDisliked(
                            curentUserLiked,
                            curentUserDisliked,
                            e.id
                          )
                        }
                      >
                        <LikeDislikeBtn />
                      </span>
                      <hr />
                    </>
                  );
                })}
            </div>
          </>
        ) : (
          <div className={styles.HistorySignedOut}>
            <ThumbUpOffAltIcon className={styles.rewind} />
            <h2>You are not logged in. Login to see your liked videos!</h2>
            <SignInButton />
          </div>
        )}
        ;
      </div>
    </div>
  );
}
