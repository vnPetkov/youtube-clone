import styles from "./SidebarTab.module.css";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

export default function SidebarTab({ Icon, tabName }) {
  return (
    <div className={styles.tab}>
      <Icon className={styles.tabIcon} />
      <h2 className={styles.tabName}>{tabName}</h2>
    </div>
  );
}
