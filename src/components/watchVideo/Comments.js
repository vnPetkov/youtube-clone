import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import styles from "./Comments.module.scss";
import { Link } from "react-router-dom";

export default function Comments(props) {
  let comments = props.comments.items;

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
        {comments &&
          comments.map((el) => {
            let commentText = el.snippet.topLevelComment.snippet.textDisplay;
            let commentUserPic = el.snippet.topLevelComment.snippet.authorProfileImageUrl;
            let commentUserName = el.snippet.topLevelComment.snippet.authorDisplayName;
            let commentData = el.snippet.topLevelComment.snippet.publishedAt;
            let commentChannelId = el.snippet.topLevelComment.snippet.authorChannelId.value;

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
