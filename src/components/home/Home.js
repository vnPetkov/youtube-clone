import styles from "./Home.module.scss";
import HomeVideo from "./HomeVideo";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchVideo from "../utilities/FetchVideo";

export default function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  const [channels, setChannels] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  let content = null;

  function fetchHomeVideos() {
    FetchVideo(nextPageToken)
      .then((result) => {
        console.log("finished fetch result : ", result);
        return result;
      })
      .then((result) => {
        let [newVideos, newChannels, nextPage] = result;
        setHomeVideos((homeVideos) => [...homeVideos, ...newVideos]);
        setChannels((channels) => [...channels, ...newChannels]);
        setNextPageToken(nextPage);
      });
  }

  useEffect(() => {
    fetchHomeVideos();
  }, []);

  if (homeVideos.length !== 0 && channels.length !== 0) {
    content = (
      <InfiniteScroll
        dataLength={homeVideos.length}
        next={() => {
          console.log("previous result : ", homeVideos, channels);
          setTimeout(() => {
            fetchHomeVideos();
          }, 2000);
        }}
        hasMore={true}
        loader={<div>ЗАРЕЖДАНИНГ...</div>}
      >
        {homeVideos.map((e, index) => {
          return (
            <HomeVideo
              videoId={e.id}
              key={e.id}
              img={e.snippet.thumbnails.high.url}
              channelImg={channels[index].snippet.thumbnails.high.url}
              channel={channels[index].snippet.localized.title}
              title={e.snippet.title}
              views={e.statistics.viewCount}
              likes={e.statistics.likeCount}
              timestamp={e.snippet.publishedAt}
              //subscribers={channels[index].statistics.subscriberCount}
              description={e.snippet.description}
            />
          );
        })}
      </InfiniteScroll>
    );
  }
  return <div className={styles.home}>{content}</div>;
}
