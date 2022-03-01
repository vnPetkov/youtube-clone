import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import styles from "./UploadModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import DragDrop from "./DragDrop";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    position: "relative",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "370px",
    height: "400px",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    textAlign: "center",
  },
};

export default function UploadModal({ modalIsOpen, setIsOpen }) {
  const [currentUploaded, setCurrentUploaded] = useState([]);
  const [uploadVidTitle, setUploadVidTitle] = useState("");
  const [uploadVidDesc, setUploadVidDesc] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const currentUserId = useSelector((state) => state.userData.uid);
  const uploadedArr = useSelector((state) => state.userData.uploadedVideos);
  const fileInput = document.getElementById("videoFileInput");

  useEffect(() => {
    setCurrentUploaded(uploadedArr);
  }, [uploadedArr]);

  function closeModal() {
    setIsOpen(false);
  }

  const getTime = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + " " + time;
  };

  function fileValidation() {
    let allowedExtensions = /(\.mp4|\.wmv|\.mpg)$/i;
    if (!allowedExtensions.exec(fileInput.value)) {
      document.getElementById("form").reset();
      return false;
    }
    return true;
  }

  const dispatch = useDispatch();
  const uploadVideo = async (currentUploadedArr) => {
    if (fileInput.files[0] === undefined) {
      setErrMessage("There is no file to upload!");
      return;
    }
    if (uploadVidTitle === "") {
      setErrMessage("The video must have title!");
      return;
    }
    if (!fileValidation()) {
      setErrMessage("Invalid file extension!");
      return;
    }
    let freader = new FileReader();
    freader.readAsDataURL(fileInput.files[0]);
    freader.onload = async () => {
      let uploadVideoObj = {
        src: freader.result,
        name: uploadVidTitle,
        description: uploadVidDesc,
        timestamp: getTime(),
      };
      currentUploadedArr.unshift(uploadVideoObj);
      dispatch({
        type: "CHANGE_UPLOADED",
        newUploadedArr: currentUploadedArr,
      });

      const userDocRef = doc(db, "users", currentUserId);
      await setDoc(userDocRef, {
        uploadedVideos: [...currentUploadedArr],
      })
        .then(() => setErrMessage("The video is uploaded!"))
        .catch((err) => {
          if (err.message.includes("maximum")) {
            setErrMessage("The video size is too big!");
          }
        });
      document.getElementById("form").reset();
    };
  };

  return (
    <div>
      <Modal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className={styles.uploadVideoTitle}>Upload you video:</h2>
        <button onClick={closeModal} className={styles.closeModalBtn}>
          <CloseIcon />
        </button>
        <form id="form" className={styles.uploadForm}>
          <input type="file" accept=".mp4,.wmv,.mpg" id="videoFileInput" />
          <DragDrop />
          <input
            type="text"
            id="title"
            maxLength="20"
            placeholder="Your video title"
            onChange={(event) => setUploadVidTitle(event.target.value.trim())}
          />
          <textarea
            id="description"
            placeholder="Your video description"
            rows="4"
            cols="23"
            maxLength="80"
            onChange={(event) => setUploadVidDesc(event.target.value.trim())}
          />
        </form>

        <Button
          variant="contained"
          onClick={() => uploadVideo(currentUploaded)}
          className={styles.uploadBtn}
        >
          Upload
        </Button>
        <p>{errMessage && errMessage}</p>
      </Modal>
    </div>
  );
}
