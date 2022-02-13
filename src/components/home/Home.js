import styles from "./Home.module.scss";
import HomeVideo from "./HomeVideo";
import React, { useState, useEffect } from "react";

export default function Home() {
  const url =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=BG&maxResults=20&regionCode=BG&key=AIzaSyA_7IYSyNXzIfLjkWLAjF-R7g5W8pdAcS8";
  const [homeVideos, setHomeVideos] = useState(null);
  const [channels, setChannels] = useState(null);
  let content = null;

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => {
        setHomeVideos(result.items);
        return Promise.all(
          result.items.map((video) => {
            return fetch(
              `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=AIzaSyA_7IYSyNXzIfLjkWLAjF-R7g5W8pdAcS8`
            );
          })
        );
      })
      .then((resp) => {
        return Promise.all(resp.map((e) => e.json()));
      })
      .then((result) => result.map((е) => е.items))
      .then((result) => result.flat())
      .then((result) => setChannels(result));
  }, []);

  if (homeVideos && channels) {
    content = (
      <div className={styles.home}>
        <div>
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
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
}
