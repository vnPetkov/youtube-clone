import styles from "./Home.module.scss";
import HomeVideo from "./HomeVideo";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchVideo from "../utilities/FetchVideo";
import { TailSpin } from "react-loader-spinner";

export default function Home({ categoryTitle, setSidebarOpen }) {
  const [homeVideos, setHomeVideos] = useState([]);

  const [channels, setChannels] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  let content = null;
  useEffect(() => {
    setSidebarOpen(true);
  }, []);

  function fetchHomeVideos() {
    FetchVideo(nextPageToken)
      .then((result) => {
        return result;
      })
      .then((result) => {
        let [newVideos, newChannels, nextPage] = result;
        setHomeVideos((prevState) => [...prevState, ...newVideos]);
        setChannels((prevState) => [...prevState, ...newChannels]);
        setNextPageToken(nextPage);
      });
  }

  useEffect(() => {
    fetchHomeVideos();
  }, []);

  if (homeVideos.length !== 0 && channels.length !== 0) {
    content = (
      <InfiniteScroll
        style={{ display: "flex", justifyContent: "center" }}
        dataLength={homeVideos.length}
        next={() => {
          setTimeout(() => {
            fetchHomeVideos();
          }, 2000);
        }}
        hasMore={true}
        loader={
          <div className={styles.loaderDiv}>
            <TailSpin
              color="grey"
              height={80}
              width={80}
              style={{ position: "absolute", bottom: "10px" }}
            />
          </div>
        }
      >
        {homeVideos &&
          channels &&
          homeVideos.map((e, index) => {
            if (channels[index] != undefined) {
              return (
                <HomeVideo
                  channelId={e.snippet.channelId}
                  videoId={e.id}
                  key={e.id}
                  img={e.snippet.thumbnails.high.url}
                  title={e.snippet.title}
                  views={e.statistics.viewCount}
                  likes={e.statistics.likeCount}
                  timestamp={e.snippet.publishedAt}
                  description={e.snippet.description}
                  channel={channels[index].snippet.localized.title}
                  channelImg={channels[index].snippet.thumbnails.high.url}
                  subscribers={channels[index].statistics.subscriberCount}
                />
              );
            }
          })}
      </InfiniteScroll>
    );
  }
  return <div className={styles.home}>{content}</div>;
}
