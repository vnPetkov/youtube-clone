import styles from "./History.module.scss";
import HorizontalCard from "../cards/HorizontalCard";
import card_styles from "../cards/HorizontalCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import SignInButton from "../buttons/SignInButton";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import FetchVideosById from "../utilities/FetchVideosById";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export default function History() {
  const [historyVideos, setHistoryVideos] = useState([]);
  const logged = useSelector((state) => state.userData.logged);
  const curentUserId = useSelector((state) => state.userData.uid);
  const historyArr = useSelector((state) => state.userData.historyVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    logged &&
      FetchVideosById(historyArr).then((result) => setHistoryVideos(result));
  }, [historyArr]);

  const clearHistory = () => {
    dispatch({ type: "CLEAR_HISTORY" });

    const userDoc = doc(db, "users", curentUserId);
    const newFields = {
      historyVideos: [],
    };
    updateDoc(userDoc, newFields);
  };

  return (
    <div className={styles.historyContainer}>
      <div className={styles.HistorySignedIn}>
        {logged ? (
          <>
            <h4>History of watched videos</h4>
            <span>
              <Button variant="contained" onClick={clearHistory}>
                Clear history videos
              </Button>
            </span>

            <div className={styles.historyCards}>
              {historyVideos &&
                historyVideos.map((e) => {
                  return (
                    <HorizontalCard
                      key={e.id}
                      img={e.snippet.thumbnails.high.url}
                      user={e.snippet.channelTitle}
                      title={e.snippet.title}
                      desc={e.snippet.description}
                      views={e.statistics.viewCount}
                      uploaded={e.snippet.publishedAt}
                      currentClass={card_styles.history_card}
                    />
                  );
                })}
            </div>
          </>
        ) : (
          <div className={styles.HistorySignedOut}>
            <SettingsBackupRestoreIcon className={styles.rewind} />
            <h2>Keep track of what you watch</h2>
            <p>Watch history isn't viewable when signed out. </p>
            <SignInButton />
          </div>
        )}
      </div>
    </div>
  );
}
