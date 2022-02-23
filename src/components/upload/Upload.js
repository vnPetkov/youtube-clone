import styles from "../history/History.module.scss";
import HorizontalCard from "../cards/HorizontalCard";
import card_styles from "../cards/HorizontalCard.module.scss";
import { useSelector } from "react-redux";
import SignInButton from "../buttons/SignInButton";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import FetchVideosById from "../utilities/FetchVideosById";
import { useEffect, useState } from "react";

export default function Upload() {
  const [uploadVideos, setUploadVideos] = useState([]);
  let content = null;
  const logged = useSelector((state) => state.userData.logged);
  const uploadedArr = useSelector((state) => state.userData.uploadedVideos);
  console.log("dadadadaadda", uploadedArr);

  useEffect(() => {
    logged && setUploadVideos(uploadedArr);
  }, []);

  //TODO: чудя се тук да може директно да ги пускаме за гледане клипчетата или да препращаме към лач пейджа, май второто е по-добре
  logged
    ? (content = (
        <>
          <h4>История на гледане</h4>
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

                // <div key={index}>
                //   <video
                //     width="720"
                //     height="480"
                //     controls="controls"
                //     id="video"
                //     src={e.src}
                //   >
                //     <source id="src" />
                //   </video>
                // </div>
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
