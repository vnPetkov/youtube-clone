import styles from "./Upload.module.scss";
import { useDispatch, useSelector } from "react-redux";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { useEffect, useState } from "react";
import SignInButton from "../buttons/SignInButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export default function Upload() {
  const [uploadVideos, setUploadVideos] = useState([]);
  const logged = useSelector((state) => state.userData.logged);
  const curentUserId = useSelector((state) => state.userData.uid);
  const currentUploaded = useSelector((state) => state.userData.uploadedVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    logged && setUploadVideos(currentUploaded);
  }, [currentUploaded]);

  const removeUploaded = (currentUploaded, videoId) => {
    let index = currentUploaded.findIndex((e) => e.timestamp === videoId);
    console.log(index);
    currentUploaded.splice(index, 1);

    dispatch({ type: "CHANGE_UPLOADED", newUploadedArr: currentUploaded });

    const userDoc = doc(db, "users", curentUserId);
    const newFields = {
      uploadedVideos: [...currentUploaded],
    };
    updateDoc(userDoc, newFields);
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadSignedIn}>
        {logged ? (
          <>
            <div className={styles.uploadCards}>
              {uploadVideos.map((e, index) => {
                return (
                  <div className={styles.watchCard} key={index}>
                    <div>
                      <iframe
                        src={e.src}
                        title={index}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        width="360"
                        height="240"
                      ></iframe>
                    </div>

                    <div className={styles.info}>
                      <h3>{e.name}</h3>
                      <div>
                        <p>{e.timestamp}</p>
                      </div>

                      <p>{e.description}</p>
                    </div>
                    <span
                      onClick={() =>
                        removeUploaded(currentUploaded, e.timestamp)
                      }
                    >
                      <DeleteOutlinedIcon />
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className={styles.uploadSignedOut}>
            <OndemandVideoIcon className={styles.rewind} />
            <h2>You are not logged in. Login to see your videos!</h2>
            <SignInButton />
          </div>
        )}
        ;
      </div>
    </div>
  );
}
