import styles from "../history/History.module.scss";
import HorizontalCard from "../cards/HorizontalCard";
import card_styles from "../cards/HorizontalCard.module.scss";
import { useSelector } from "react-redux";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import FetchVideosById from "../utilities/FetchVideosById";
import { useEffect, useState } from "react";
import SignInButton from "../buttons/SignInButton";

export default function Upload() {
  const [uploadVideos, setUploadVideos] = useState([]);
  let content = null;
  const logged = useSelector((state) => state.userData.logged);
  const uploadedArr = useSelector((state) => state.userData.uploadedVideos);
  console.log("dadadadaadda", uploadedArr);

  useEffect(() => {
    logged && setUploadVideos(uploadedArr);
  }, []);

  logged
    ? (content = (
        <>
          <div className={styles.historyCards}>
            {uploadVideos.map((e, index) => {
              return (
                <div className={styles.watchPlayer} key={index}>
                  <iframe
                    src={e.src}
                    title={index}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="720"
                    height="480"
                  ></iframe>
                </div>
              );
            })}
          </div>
        </>
      ))
    : (content = (
        <div className={styles.HistorySignedOut}>
          <OndemandVideoIcon className={styles.rewind} />
          <h2>You are not logged in. Login to see your videos!</h2>
          <SignInButton />
        </div>
      ));

  return (
    <div className={styles.historyContainer}>
      <div className={styles.HistorySignedIn}>{content}</div>
    </div>
  );
}
