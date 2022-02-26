import styles from "./History.module.scss";
import HorizontalCard from "../cards/HorizontalCard";
import card_styles from "../cards/HorizontalCard.module.scss";
import { useSelector } from "react-redux";
import SignInButton from "../buttons/SignInButton";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import FetchVideosById from "../utilities/FetchVideosById";
import { useEffect, useState } from "react";

export default function History() {
  const [historyVideos, setHistoryVideos] = useState([]);
  let content = null;
  const logged = useSelector((state) => state.userData.logged);
  const historyArr = useSelector((state) => state.userData.historyVideos);
  console.log("dadadadaadda", historyArr);

  useEffect(() => {
    logged &&
      FetchVideosById(historyArr).then((result) => setHistoryVideos(result));
  }, []);

  logged
    ? (content = (
        <>
          <h4>История на гледане</h4>
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
