import styles from "./Home.module.scss";
import HomeVideo from "./HomeVideo";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchVideo from "../utilities/FetchVideo";

export default function Home() {
  // const [homeVideos, setHomeVideos] = useState([]);
  // const [channels, setChannels] = useState([]);
  // const [nextPageToken, setNextPageToken] = useState("");
  // let content = null;

  // function homePageFetch() {
  //   let apiKey = "AIzaSyCnFTj5eA2iaolTqTq5IppRiwbGq-W1OFg";

  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=BG&maxResults=24&regionCode=BG&key=${apiKey}&pageToken=${nextPageToken}`
  //   )
  //     .then((resp) => resp.json())
  //     .then((result) => {
  //       // console.log(result);
  //       setNextPageToken(result.nextPageToken);
  //       setHomeVideos([...homeVideos, ...result.items]);

  //       return Promise.all(
  //         result.items.map((video) => {
  //           return fetch(
  //             `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${apiKey}`
  //           );
  //         })
  //       );
  //     })
  //     .then((resp) => {
  //       return Promise.all(resp.map((e) => e.json()));
  //     })
  //     .then((result) => {
  //       return result.map((е) => е.items);
  //     })
  //     .then((result) => {
  //       return result.flat();
  //     })
  //     .then((result) => {
  //       console.log("1 : ", result); ///////////////////////////
  //       setChannels([...channels, ...result]);
  //       console.log("2 : ", channels); //////////////////////////
  //     });
  // }

  // useEffect(() => {
  //   homePageFetch();
  // }, []);

  // if (homeVideos.length !== 0 && channels.length !== 0) {
  //   content = (
  //     <InfiniteScroll
  //       dataLength={homeVideos.length}
  //       next={() => {
  //         setTimeout(() => {
  //           homePageFetch();
  //         }, 2000);
  //       }}
  //       hasMore={true}
  //       loader={<div>ЗАРЕЖДАНИНГ...</div>}
  //     >
  //       {homeVideos.map((e, index) => {
  //         // console.log(index);
  //         return (
  //           <HomeVideo
  //             id={e.id}
  //             key={e.id}
  //             img={e.snippet.thumbnails.high.url}
  //             //channelImg={channels[index].snippet.thumbnails.high.url}
  //             //channel={channels[index].snippet.title}
  //             title={e.snippet.title}
  //             views={e.statistics.viewCount}
  //             timestamp={e.snippet.publishedAt}
  //           />
  //         );
  //       })}
  //     </InfiniteScroll>
  //   );
  // }
  // return <div className={styles.home}>{content}</div>;

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  const [homeVideos, setHomeVideos] = useState([]);
  const [channels, setChannels] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  let content = null;

  async function fetchHomeVideos() {
    const result = await FetchVideo(nextPageToken);
    let [videos, channels, nextPage] = result;
    setHomeVideos(videos);
    setChannels(channels);
    setNextPageToken(nextPage);
  }

  useEffect(() => {
    fetchHomeVideos();
  }, []);

  if (homeVideos.length !== 0 && channels.length !== 0) {
    content = (
      <InfiniteScroll
        dataLength={homeVideos.length}
        next={() => {
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
              id={e.id}
              key={e.id}
              img={e.snippet.thumbnails.high.url}
              //channelImg={channels[index].snippet.thumbnails.high.url}
              //channel={channels[index].snippet.title}
              title={e.snippet.title}
              views={e.statistics.viewCount}
              timestamp={e.snippet.publishedAt}
            />
          );
        })}
      </InfiniteScroll>
    );
  }
  return <div className={styles.home}>{content}</div>;
}
