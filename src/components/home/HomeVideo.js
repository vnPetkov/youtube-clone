import React from "react";
import styles from "./HomeVideo.module.scss";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

export default function HomeVideo(props) {
  return (
    <Link to={"/watchVideo_page"}>
      <div className={styles.videoCard}>
        <img src={props.img} alt="video poster" />
        <div>
          <Avatar alt={props.channel} src={props.channelImg} />
          <div>
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
