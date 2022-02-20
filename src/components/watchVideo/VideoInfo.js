import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link,useParams } from "react-router-dom";

import styles from "./VideoInfo.module.scss";
import { useDispatch } from "react-redux";

export default function VideoInfo(props) {
  const dispatch = useDispatch();
  const like = () => {
    dispatch({ type: "LIKE", videoId: props.id });
  };

  return (
    <div className={styles.videoInfo}>
      <div className={styles.infoMain}>
        <h5>{props.title}</h5>
        <div>
          <p>
            {props.views} &#9679; {props.timestamp}
          </p>

          <div>
            <span onClick={like}>
              <ThumbUpOutlinedIcon />

              <p>{props.likes}</p>
            </span>

            <span>
              <ThumbDownOutlinedIcon />
              <p>НЕХАРЕСВАНЕ</p>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="infoChannel">

          <Link to={`/channel/test/`}>
            <div>
              <Avatar
                className={styles.avatar}
                alt={props.channel}
                src={props.channelImg}
                sx={{ width: 48, height: 48 }}
              />
              <p>
                <a href="...">{props.channel}</a> <br /> {props.subscribers}
              </p>
            </div>
          </Link>

          <div className={styles.channelButtons}>
            <Button variant="outlined" color="primary">
              СТАНЕТЕ ЧЛЕН
            </Button>
            <Button variant="contained" color="error">
              АБОНИРАНЕ
            </Button>
          </div>
        </div>

        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}
