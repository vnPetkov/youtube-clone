import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import styles from "./Comments.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export default function Comments(props) {
  const firebaseCommentsArr = useSelector(
    (state) => state.databaseComments.commentsArr
  );

  const currentUserId = useSelector((state) => state.userData.uid);
  const currentName = useSelector((state) => state.userData.name);

  let comments = props.comments.items;
  const watchedVideoId = props.videoId;

  //TODO: трябва всички селектори на редукса  дето се повтарят в почти всеки файл да ги накеркенечим в конст.джс в утилитис папката
  //TODO:  тези селектори Краси спомен, че може да ги направим на функции които приемат части от пътя или целия път
  //TODO: да се направи проверка за логд за да може юззъра да коментира

  const videoCommentsIndex = firebaseCommentsArr.findIndex((video) => {
    console.log(video.videoId, watchedVideoId);
    return video.videoId === watchedVideoId;
  });

  const pushComment = (index, obj) => {
    firebaseCommentsArr[index].comments.push(obj);
    dispatch({
      type: "ADD_COMMENT",
      newCommentsArr: firebaseCommentsArr,
    });
  };

  const dispatch = useDispatch();
  const uploadComment = () => {
    console.log("aktivirane");
    let currentComment = document.getElementById("commentInput").value;
    let commentObj = {
      userName: currentName,
      comment: currentComment,
    };

    console.log("index : ", videoCommentsIndex);
    videoCommentsIndex !== -1
      ? pushComment(videoCommentsIndex, commentObj)
      : dispatch({
          type: "ADD_VIDEO_COMMENTS", ////////////////ako НЕ Е коментирано видото до сега --> създаване на целия обект
          newVideoComments: {
            videoId: watchedVideoId,
            comments: [commentObj],
          },
        });

    firebaseCommentsArr.forEach((e) => {
      let videoCommentsRef = doc(db, "comments", watchedVideoId);
      setDoc(videoCommentsRef, e);
    });
  };

  return (
    <div className={styles.comments}>
      <div className={styles.commentForm}>
        <div className={styles.commentField}>
          <Avatar
            className={styles.avatar}
            alt={props.user}
            src={props.userImg}
            sx={{ width: 48, height: 48 }}
          />
          <input
            type="text"
            placeholder="Добавяне на публичен коментар..."
            id="commentInput"
          ></input>
        </div>

        <div className={styles.commentBtns}>
          <Button variant="contained" className={styles.cancelCommentBtn}>
            Cancel
          </Button>
          <Button variant="contained" onClick={uploadComment}>
            Comment
          </Button>
        </div>
      </div>
      <div className={styles.commentsList}>
        {videoCommentsIndex !== -1 &&
          firebaseCommentsArr[videoCommentsIndex].comments.map((el) => {
            console.log(
              "komentarite na sutbata : ",
              firebaseCommentsArr[videoCommentsIndex].comments
            );
            let commentText = el.comment;
            let commentUserPic =
              "https://pm1.narvii.com/8123/89cb06ef5b80554ebbb1bdfc6b15a2d56ebec483r1-1842-2000v2_hq.jpg";
            let commentUserName = el.userName;
            let commentData = new Date().toString();
            let commentChannelId = "current channel";
            //TODO: да сложа в юсър слайс юсърнейм и картинка са да може да се слагат при коментарите

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
      </div>
    </div>
  );
}

{
  /* {testComments.map((comment, index) => {
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
        })} */
}
