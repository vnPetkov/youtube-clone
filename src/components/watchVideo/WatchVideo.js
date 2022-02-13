import React from "react";
import { testSearch, testWatch } from "../../server/data.js";
import HorizontalCard from "../cards/HorizontalCard";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";

import styles from "./WatchVideo.module.scss";

export default function WatchVideo() {
  const params = useParams();
  console.log(params.videoId);

  return (
    <div className={styles.watchVideo}>
      <div className={styles.mainColumn}>
        <div className={styles.watchPlayer}>
          <iframe
            src={`https://www.youtube.com/embed/${params.videoId}`}
            title="video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoInfo
          title={testWatch.title}
          views={testWatch.views}
          timestamp={testWatch.timestamp}
          likes={testWatch.likes}
          channelImg={testWatch.channelImg}
          channel={testWatch.channel}
          subscribers={testWatch.subscribers}
          description={testWatch.description}
        />
        <Comments />
      </div>

      <div className={styles.recomendedColumn}>
        <div className={styles.recomendedContainer}>
          {testSearch.map(
            ({ title, img, user, userPic, desc, views, uploaded }) => {
              return (
                <HorizontalCard
                  title={title}
                  img={img}
                  user={user}
                  userPic={userPic}
                  desc={desc}
                  views={views}
                  uploaded={uploaded}
                  currentClass={styles.horizonntalCard}
                  key={title}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
