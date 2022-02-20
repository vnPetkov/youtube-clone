import styles from "./History.module.scss";
import HorizontalCard from "../cards/HorizontalCard";
import card_styles from "../cards/HorizontalCard.module.scss";
import { useSelector } from "react-redux";
import SignInButton from "../buttons/SignInButton";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import FetchVideosById from "../utilities/FetchVideosById";

export default function HistorySignedIn() {
  const logged = useSelector((state) => state.userData.logged);
  const historyArr = useSelector((state) => state.userData.videoHistory);

  //FetchbyId func

  // return (
  //   <div className={styles.HistorySignedIn}>
  //     <h4>История на гледане</h4>
  //     <div className={styles.historyCards}>
  //       {logged ? (

  //         historyArr.map((element) => {
  //           return (
  //             <HorizontalCard
  //               videoId={element.id.videoId}
  //               img={element.snippet.thumbnails.high.url}
  //               user={element.snippet.channelTitle}
  //               title={element.snippet.title}
  //               desc={
  //                 "Music video by Pop Smoke performing Hello (Audio). © 2020 Republic Records, a division of UMG Recordings, Inc. & Victor Victor ..."
  //               }
  //               views="359578"
  //               uploaded={element.snippet.publishedAt}
  //               currentClass={card_styles.history_card}
  //               key={element.id.videoId}
  //             />
  //           );
  //         })
  //       ) : (
  //         <div className={styles.HistorySignedOut}>
  //           <SettingsBackupRestoreIcon className={styles.rewind} />
  //           <h2>Keep track of what you watch</h2>
  //           <p>Watch history isn't viewable when signed out. </p>
  //           <SignInButton />
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
}
