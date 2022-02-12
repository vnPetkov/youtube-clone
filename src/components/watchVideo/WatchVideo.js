import React from "react";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";
import styles from "./WatchVideo.module.scss";

export default function WatchVideo() {
  return (
    <div>
      <div className="watchScreen">
        <iframe
          width="1500"
          height="800"
          src="https://www.youtube.com/embed/lheapd7bgLA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <VideoInfo />
      <Comments />
    </div>
  );
}
