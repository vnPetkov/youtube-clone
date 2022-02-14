import styles from "./Home.module.scss";
import HomeVideo from "./HomeVideo";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  const [channels, setChannels] = useState([]);
  let content = null;

  function homePageFetch() {
    console.log("avtivated");
    let apiKey = "AIzaSyDKuYQmUW8Sza0hX2uexPM4dIG7mS440vU";
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=BG&maxResults=24&regionCode=BG&key=${apiKey}`
    )
      .then((resp) => resp.json())
      .then((result) => {
        setHomeVideos([...homeVideos, ...result.items]);
        return Promise.all(
          result.items.map((video) => {
            return fetch(
              `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${apiKey}`
            );
          })
        );
      })
      .then((resp) => {
        return Promise.all(resp.map((e) => e.json()));
      })
      .then((result) => result.map((е) => е.items))
      .then((result) => result.flat())
      .then((result) => setChannels([...channels, ...result]));
  }

  useEffect(() => {
    homePageFetch();
  }, []);

  if (homeVideos.length === 0 && channels.length === 0) {
    content = (
      <div className={styles.home}>
        <InfiniteScroll
          dataLength={homeVideos.length}
          //next={}
          hasMore={true}
          loader={<div>ЗАРЕЖДАНИНГ...</div>}
        >
          {homeVideos.map((e, index) => {
            return (
              <HomeVideo
                id={e.id}
                key={e.id}
                img={e.snippet.thumbnails.high.url}
                channelImg={channels[index].snippet.thumbnails.high.url}
                channel={channels[index].snippet.title}
                title={e.snippet.title}
                views={e.statistics.viewCount}
                timestamp={e.snippet.publishedAt}
              />
            );
          })}
        </InfiniteScroll>
      </div>
    );
  }
  return <div>{content}</div>;
}
