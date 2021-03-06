import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import styles from "./Comments.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export default function Comments(props) {
  const logged = useSelector((state) => state.userData.logged);
  const profileName = useSelector((state) => state.userData.name);
  const profilePicture = useSelector((state) => state.userData.profileImg);
  const watchedVideoId = props.videoId;
  let comments = props.comments.items;

  const [writeComment, setWriteComment] = useState("");

  const firebaseCommentsArr = useSelector(
    (state) => state.databaseComments.commentsArr
  );
  const videoCommentsIndex = firebaseCommentsArr.findIndex((video) => {
    return video.videoId === watchedVideoId;
  });

  const pushComment = (index, obj) => {
    firebaseCommentsArr[index].comments.unshift(obj);
    dispatch({
      type: "ADD_COMMENT",
      newCommentsArr: firebaseCommentsArr,
    });
  };

  const dispatch = useDispatch();
  const uploadComment = () => {
    if (writeComment !== "") {
      let commentObj = {
        userName: profileName,
        userPic: profilePicture,
        comment: writeComment,
      };
      videoCommentsIndex !== -1
        ? pushComment(videoCommentsIndex, commentObj)
        : dispatch({
            type: "ADD_VIDEO_COMMENTS",
            newVideoComments: {
              videoId: watchedVideoId,
              comments: [commentObj],
            },
          });

      firebaseCommentsArr.forEach(async (e) => {
        await setDoc(doc(db, "comments", e.videoId), e);
      });
      setWriteComment("");
    }
  };

  return (
    <div className={styles.comments}>
      <div className={styles.commentForm}>
        <div className={styles.commentField}>
          <Avatar
            className={styles.avatar}
            alt={props.user}
            src={profilePicture}
            sx={{ width: 48, height: 48 }}
          />
          {logged ? (
            <input
              type="text"
              placeholder="Add comment..."
              value={writeComment}
              onChange={(e) => {
                setWriteComment(e.target.value);
              }}
              id="commentInput"
            ></input>
          ) : (
            <Link to="/login">
              <input
                type="text"
                placeholder="Add comment..."
                id="commentInput"
              ></input>
            </Link>
          )}
        </div>
        {logged && (
          <div className={styles.commentBtns}>
            <Button variant="contained" className={styles.cancelCommentBtn}>
              Cancel
            </Button>
            <Button variant="contained" onClick={uploadComment}>
              Comment
            </Button>
          </div>
        )}
      </div>

      <div className={styles.commentsList}>
        {videoCommentsIndex !== -1 &&
          firebaseCommentsArr[videoCommentsIndex].comments.map((el) => {
            let commentText = el.comment;
            let commentUserPic = el.userPic;
            let commentUserName = el.userName;
            let commentData = new Date().toString();
            let commentChannelId = el.userName + "'s channel";

            return (
              <Link to={`/channel/${commentChannelId}/`} key={commentText}>
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
              <Link to={`/channel/${commentChannelId}/`} key={el.id}>
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
      </div>
    </div>
  );
}
