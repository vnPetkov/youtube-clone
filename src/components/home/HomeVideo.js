import React from "react";
import styles from "./HomeVideo.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

export default function HomeVideo(props) {
  return (
    <Link to={"/watchVideo_page"}>
      <div className={styles.videoCard}>
        <img className={styles.videoImg} src={props.img} alt="video poster" />
        <div className={styles.videoDetails}>
          <Avatar
            className={styles.videoAvatar}
            alt={props.channel}
            src={props.channelImg}
          />
          <div className={styles.videoText}>
            <h4>{props.title}</h4>
            <p>{props.channel}</p>
            <p>
              {props.views} &#9679; {props.timestamp}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
