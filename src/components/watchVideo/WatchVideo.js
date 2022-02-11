import React from "react";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";
import styles from "./WatchVideo.module.css";

export default function WatchVideo() {
  return (
    <div>
      <div className="watchScreen">
        <iframe
          title="watched video"
          frameBorder="0"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <VideoInfo />
      <Comments />
    </div>
  );
}
