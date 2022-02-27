import API_KEY from "../utilities/API_KEY";
import React, { useState, useEffect } from "react";
import HorizontalCard from "../cards/HorizontalCard";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";
import styles from "./WatchVideo.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchVideo from "../utilities/FetchVideo";

export default function WatchVideo(props) {
  const [channelInfoReady, setChannelInfoReady] = useState(false);
  const [channelInfo, setChannelInfo] = useState([]);

  const [videoInfoReady, setVideoInfoReady] = useState(false);
  const [videoInfo, setVideoInfo] = useState([]);

  const [comments, setComments] = useState([]);
  const [commentsReady, setCommentsReady] = useState(false);

  const [relatedVideos, setRelatedVideos] = useState([]);
  const [channels, setChannels] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  let content = null;

  const params = useParams();

  // Fetch video
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${params.videoId}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideoInfo(data);
        setVideoInfoReady(true);
      });
  }, [params]);

  // Fetch comments
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&videoId=${params.videoId}&maxResults=15`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setCommentsReady(true);
      });
  }, []);

  // Fetch channel image
  useEffect(() => {
    if (videoInfoReady) {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoInfo.items[0].snippet.channelId}&key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setChannelInfo(data);
          setChannelInfoReady(true);
        });
    }
  }, [videoInfoReady]);

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
        loader={<div></div>}
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
        {videoInfoReady && channelInfoReady && (
          <VideoInfo videoInfo={videoInfo} channelInfo={channelInfo} />
        )}
        {commentsReady && (
          <Comments comments={comments} videoId={params.videoId} />
        )}
      </div>

      <div className={styles.relatedColumn}>{content}</div>
    </div>
  );
}
