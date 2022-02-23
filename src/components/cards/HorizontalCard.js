import React from "react";
import { Link } from "react-router-dom";
// import styles from "./HorizontalCard.module.scss"

// CAN ADD PROPERTIES FOR WIDTH AND HEIGHT LATER
export default function HorizontalCard({
  videoId,
  img,
  user,
  title,
  desc,
  views,
  uploaded,
  currentClass,
  channelId
  
}) {

  return (
    <Link
      to={`/watchVideo_page/${videoId}/`}
      key = {videoId}
    >
      <div className={currentClass}>
        <img src={img} alt="video poster" />
        <div>
          <h3>{title}</h3>
          <div>
            {/* <p>{views} &#9679;</p> */}
            <p>{uploaded}</p>
          </div>
          <div>
            {/* <img src={userPic} alt="user pic" /> */}
            <Link  to={`/channel/${channelId}`}>{user}</Link>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
