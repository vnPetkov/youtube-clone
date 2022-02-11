import React from "react";
import styles from "./Search_card.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// CAN ADD PROPERTIES FOR WIDTH AND HEIGHT LATER
export default function Search_card({
  title,
  img,
  user,
  userPic,
  desc,
  views,
  uploaded,
}) {
  return (
    <Link to={"/watchVideo_page"}>
      <div className={styles.search_card}>
        <img src={img} />
        <div className={styles.search_card_description}>
          <h3>{title}</h3>
          <p>
            {" "}
            {views} {uploaded}
          </p>
          <div className={styles.search_card_user}>
            <img src={userPic} />
            <p>{user}</p>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
