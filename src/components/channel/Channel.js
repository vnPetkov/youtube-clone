import styles from "./Channel.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



export default function Channel({ API_KEY }) {
    const params = useParams();
    const [channelPlaylist, setChannelPlaylist] = useState();
    const [channelInfo, setChannelInfo] = useState([]);
    const [videosReady, setVideosReady] = useState(false);
    const [profileReady, setProfileReady] = useState(false);


    useEffect(() => {
        console.log(params)
        fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${params.channelid}&key=${API_KEY}`)
            .then(res => res.json())
            .then(res => {
                let channelPlaylist = res.items[0].contentDetails.relatedPlaylists.uploads;
                setChannelInfo(res.items[0]);
                setProfileReady(true);
                fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${channelPlaylist}&key=${API_KEY}`)
                    .then(res => res.json())
                    .then(data => {
                        setChannelPlaylist(data.items);
                        setVideosReady(true);
                    })
            })
    }, [])
    return <div className={styles.channelWrap}>

        {profileReady && (<div className={styles.channelProfile}>
            <img src={channelInfo.snippet.thumbnails.default.url} />
            <div>
                <p className={styles.channelName}>{channelInfo.snippet.title}</p>
                <p className={styles.channelSubs}>{channelInfo.statistics.subscriberCount} абонати</p>
            </div>

        </div>)}

        <div>
            <h4>Качени</h4>
            <div className={styles.channelVideosContainer}>
                {videosReady && channelPlaylist.map(video => {
                    return (
                        <Link key={video.id} to={`/watchVideo_page/${video.snippet.resourceId.videoId}/`} className={styles.channelVideoCard}>
                            <img src={video.snippet.thumbnails.medium.url} />
                            <h5>{video.snippet.title}</h5>
                            <p>{video.snippet.publishedAt}</p>
                        </Link>
                    )

                })}

            </div>
        </div>
    </div>
}