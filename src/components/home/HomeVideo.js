import React from "react";
import styles from "./HomeVideo.module.scss";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

export default function HomeVideo(props) {
  //let channelImg = encodeURIComponent(props.channelImg);
  return (
    <Link
    channelId={props.channelId}
      to={`/watchVideo_page/${props.videoId}/${props.title}/${props.channel}/${props.views}/${props.timestamp}/${props.likes}/${props.subscribers}`} //${props.description}
    >
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
