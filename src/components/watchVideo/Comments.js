import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import styles from "./Comments.module.scss";
import { testComments } from "../../server/data.js";

export default function Comments(props) {





  return (
    <div className="comments">
      <div className="commentForm">
        <Avatar
          className={styles.avatar}
          alt={props.user}
          src={props.userImg}
          sx={{ width: 48, height: 48 }}
        />
        <form>
          <input
            type="text"
            placeholder="Добавяне на публичен коментар..."
          ></input>
        </form>
        <Button variant="contained">КОМЕНТАР</Button>
      </div>
      <div className="commentsList">
        {/* {testComments.map((comment, index) => {
          return (
            <div className={styles.comment} key={index}>
              <Avatar
                className={styles.avatar}
                alt={comment.user}
                src={comment.userImg}
                sx={{ width: 48, height: 48 }}
              />
              <div>
                <div>
                  <h3>{comment.user} &nbsp;</h3>
                  <p>{comment.timestamp}</p>
                </div>
                <div>
                  <p>{comment.comment}</p>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
