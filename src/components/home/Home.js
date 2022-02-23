import styles from "./Home.module.scss";
import HomeVideo from "./HomeVideo";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchVideo from "../utilities/FetchVideo";
import API_KEY from "../utilities/API_KEY";

export default function Home({categoryTitle}) {
  const [homeVideos, setHomeVideos] = useState([]);

  const [channels, setChannels] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  let content = null;

  // TODO FETCH CATEGORIES HAVE TO FINISH IT
  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${categoryTitle}&type=video&key=${API_KEY}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        // HOMEVIDEOS(res)
      })
  }, [categoryTitle])


  function fetchHomeVideos() {
    FetchVideo(nextPageToken)
      .then((result) => {
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
        style={{ display: "flex", justifyContent: "center" }}
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
        {homeVideos && homeVideos.map((e, index) => {
          return (
            <HomeVideo
              channelId={e.snippet.channelId}
              videoId={e.id}
              key={e.id}
              img={e.snippet.thumbnails.high.url}
              channel={channels[index].snippet.localized.title}
              title={e.snippet.title}
              views={e.statistics.viewCount}
              likes={e.statistics.likeCount}
              timestamp={e.snippet.publishedAt}
              channelImg={channels[index].snippet.thumbnails.high.url}
              subscribers={channels[index].statistics.subscriberCount}
              description={e.snippet.description}
            />
          );
        })}
      </InfiniteScroll>
    );
  }
  return <div className={styles.home}>{content}</div>;
}
