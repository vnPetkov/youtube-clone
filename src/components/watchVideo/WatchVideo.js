import api_key from "../utilities/api_key";
import React, { useState, useEffect } from "react";
import HorizontalCard from "../cards/HorizontalCard";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";
import styles from "./WatchVideo.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchVideo from "../utilities/FetchVideo";

export default function WatchVideo(props) {
  const [comments, setComments] = useState([]);
  const [commentsReady, setCommentsReady] = useState(false);

  const [relatedVideos, setRelatedVideos] = useState([]);
  const [channels, setChannels] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  let content = null;

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${api_key}&textFormat=plainText&part=snippet&videoId=${params.videoId}&maxResults=50`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setCommentsReady(true);
      });
  }, []);

  function fetchRelatedVideos() {
    FetchVideo(nextPageToken)
      .then((result) => {
        return result;
      })
      .then((result) => {
        let [videos, channels, nextPage] = result;
        setRelatedVideos(videos);
        setChannels(channels);
        setNextPageToken(nextPage);
      });
  }

  useEffect(() => {
    fetchRelatedVideos();
  }, []);

  if (relatedVideos.length !== 0 && channels.length !== 0) {
    content = (
      <InfiniteScroll
        className={styles.relatedContainer}
        dataLength={relatedVideos.length}
        next={() => {
          setTimeout(() => {
            console.log("infinite scroll activated");
            fetchRelatedVideos();
          }, 1000);
        }}
        hasMore={true}
        loader={<div>ЗАРЕЖДАНИНГ...</div>}
      >
        {relatedVideos.map((e, index) => {
          return (
            <HorizontalCard
              videoId={e.id}
              img={e.snippet.thumbnails.high.url}
              user={e.snippet.channelTitle}
              title={e.snippet.title}
              desc={e.snippet.description}
              views={e.statistics.viewCount}
              uploaded={e.snippet.publishedAt}
              currentClass={styles.horizonntalCard}
              key={e.id}
            />
          );
        })}
      </InfiniteScroll>
    );
  }
  return (
    <div className={styles.watchVideo}>
      <div className={styles.mainColumn}>
        <div className={styles.watchPlayer}>
          <iframe
            src={`https://www.youtube.com/embed/${params.videoId}`}
            title={params.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoInfo
          id={params.videoId}
          title={params.title}
          //channelImg={params.channelImg}
          channel={params.channel}
          views={params.views}
          timestamp={params.timestamp}
          likes={params.likes}
          subscribers={params.subscribers}
          //description={params.description}
        />
        {setCommentsReady && <Comments comments={comments} />}
      </div>

      <div className={styles.relatedColumn}>{content}</div>
    </div>
  );
}
