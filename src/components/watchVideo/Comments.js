import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import styles from "./Comments.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Comments(props) {
  const [firebaseComments, setFirebaseComments] = useState([]);
  const logged = useSelector((state) => state.userData.logged);
  const firebaseCommentsArr = useSelector(
    (state) => state.databaseComments.commentsArr
  );
  const currentUserId = useSelector((state) => state.userData.uid);

  let comments = props.comments.items;
  const watchedVideoId = props.videoId;

  //TODO: трябва всички селектори на редукса  дето се повтарят в почти всеки файл да ги накеркенечим в конст.джс в утилитис папката
  //TODO:  тези селектори Краси спомен, че може да ги направим на функции които приемат части от пътя или целия път
  //TODO: да се направи проверка за логд за да може юззъра да коментира

  const dispatch = useDispatch();
  const uploadComment = () => {
    let currentComment = document.getElementById("commentInput");
    let commentObj = {
      userId: currentUserId,
      comment: currentComment,
    };
    let videoCommentsIndex = firebaseCommentsArr.indexOf(
      (video) => video.videoId === watchedVideoId
    );
    videoCommentsIndex
      ? dispatch({
          type: "ADD_COMMENT", ////////////////ako Е коментирано видото до сега --> създаване на нов обект с коментара, който нашиваме в масива намиращ се в големия обект на видеото
          newComment: commentObj,
          videoInd: videoCommentsIndex,
        })
      : dispatch({
          type: "ADD_VIDEO_COMMENTS", ////////////////ako НЕ Е коментирано видото до сега --> създаване на целия обект
          newVideoComments: {
            videoId: watchedVideoId,
            comments: [commentObj],
          },
        });
  };

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
            id="commentInput"
          ></input>
        </form>
        <Button variant="contained">Cancel</Button>
        <Button variant="contained" onClick={uploadComment}>
          Comment
        </Button>
      </div>
      <div className="commentsList">
        {comments &&
          comments.map((el) => {
            let commentText = el.snippet.topLevelComment.snippet.textDisplay;
            let commentUserPic =
              el.snippet.topLevelComment.snippet.authorProfileImageUrl;
            let commentUserName =
              el.snippet.topLevelComment.snippet.authorDisplayName;
            let commentData = el.snippet.topLevelComment.snippet.publishedAt;
            let commentChannelId =
              el.snippet.topLevelComment.snippet.authorChannelId.value;

            return (
              <Link to={`/channel/${commentChannelId}/`}>
                <div className={styles.comment} key={commentText}>
                  <Avatar
                    className={styles.avatar}
                    alt={commentUserName}
                    src={commentUserPic}
                    sx={{ width: 48, height: 48 }}
                  />
                  <div>
                    <div>
                      <h3>{commentUserName} &nbsp;</h3>
                      <p>{commentData}</p>
                    </div>
                    <div>
                      <p className={styles.comment.text}>{commentText}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

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
