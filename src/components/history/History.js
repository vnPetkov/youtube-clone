import React from "react";
import HistorySignedOut from "./HistorySignedOut";
import HistorySignedIn from "./HistorySignedIn";

import styles from "./History.module.scss";

export default function History() {
  return (
    <div className={styles.historyContainer}>

      <HistorySignedIn />


      {/* IF LOGGED OUT */}
      {/* <HistorySignedOut /> */}
    </div>
  );
}
