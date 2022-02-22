import styles from "./Liked.module.scss";
import HorizontalCard from "../cards/HorizontalCard";
import card_styles from "../cards/HorizontalCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import SignInButton from "../buttons/SignInButton";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FetchVideosById from "../utilities/FetchVideosById";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig.js";
import { updateDoc, doc } from "firebase/firestore";

export default function History() {
  const [likedVideos, setLikedVideos] = useState([]);
  let content = null;
  const logged = useSelector((state) => state.userData.logged);
  const likedArr = useSelector((state) => state.userData.likedVideos);
  const curentUserId = useSelector((state) => state.userData.uid);

  useEffect(() => {
    logged &&
      FetchVideosById(likedArr).then((result) => setLikedVideos(result));
  }, []);

  const dispatch = useDispatch();
  const removeVideo = (array, videoId) => {
    let index = array.indexOf(videoId);
    array.splice(index, 1);
    dispatch({ type: "CHANGE_LIKED", newLikedArr: array });
    //setLikedVideos(array);
    const userDoc = doc(db, "users", curentUserId);
    const newFields = {
      likedVideos: [...array],
    };
    updateDoc(userDoc, newFields);
  };

  logged && likedVideos.length !== 0
    ? (content = (
        <>
          <h4>История на гледане</h4>
          <div className={styles.historyCards}>
            {likedVideos.map((e) => {
              return (
                <>
                  <HorizontalCard
                    key={e.id}
                    img={e.snippet.thumbnails.high.url}
                    user={e.snippet.channelTitle}
                    title={e.snippet.title}
                    currentClass={card_styles.history_card}
                  />
                  <span onClick={() => removeVideo(likedArr, e.id)}>
                    <DeleteOutlinedIcon />
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
          <SettingsBackupRestoreIcon className={styles.rewind} />
          <h2>Keep track of what you watch</h2>
          <p>Watch history isn't viewable when signed out. </p>
          <SignInButton />
        </div>
      ));

  return (
    <div className={styles.historyContainer}>
      <div className={styles.HistorySignedIn}>{content}</div>
    </div>
  );
}
