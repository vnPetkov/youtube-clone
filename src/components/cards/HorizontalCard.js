import React from "react";
import { Link } from "react-router-dom";

// CAN ADD PROPERTIES FOR WIDTH AND HEIGHT LATER
export default function HorizontalCard({
  title,
  img,
  user,
  userPic,
  desc,
  views,
  uploaded,
  currentClass,
}) {
  return (
    <Link to={"/watchVideo_page"}>
      <div className={currentClass}>
        <img src={img} alt="video poster" />
        <div>
          <h3>{title}</h3>
          <div>
            <p>{views} &#9679;</p>
            <p>{uploaded}</p>
          </div>
          <div>
            <img src={userPic} alt="user pic" />
            <p>{user}</p>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
