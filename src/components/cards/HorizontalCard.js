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
  userPic,
}) {
  return (
    <Link
      to={`/watchVideo_page/${videoId}/${title}/${user}/${views}/${uploaded}/2.7хил/250310`}
    >
      <div className={currentClass}>
        <img src={img} alt="video poster" />
        <div>
          <h3>{title}</h3>
          <div>
            <p>{views} &#9679;</p>
            <p>{uploaded}</p>
          </div>
          <div>
            {/* <img src={userPic} alt="user pic" /> */}
            <p>{user}</p>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
