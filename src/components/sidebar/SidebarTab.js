import styles from "./Sidebar.module.scss";
import React from "react";

export default function SidebarTab({ Icon, tabName }) {
  return (
    <div className={styles.tab}>
      <Icon />
      <h2>{tabName}</h2>
    </div>
  );
}
