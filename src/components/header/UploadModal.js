import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import styles from "./UploadModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

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
    width: "350px",
    height: "250px",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    textAlign: "center",
  },
};

export default function UploadModal({ modalIsOpen, setIsOpen }) {
  const [currentUploaded, setCurrentUploaded] = useState([]);

  const currentUserId = useSelector((state) => state.userData.uid);
  const uploadedArr = useSelector((state) => state.userData.uploadedVideos);

  useEffect(() => {
    setCurrentUploaded(uploadedArr);
  }, [uploadedArr]);

  function closeModal() {
    setIsOpen(false);
  }

  // UPLOAD VIDEO
  const dispatch = useDispatch();
  const uploadVideo = async () => {
    let input = document.getElementById("videoFileInput");
    let freader = new FileReader();
    freader.readAsDataURL(input.files[0]);

    freader.onload = async () => {
      let uploadVideoObj = {
        src: freader.result,
        name: "Our home",
        channel: "Deep space geeks",
        description: "uahfauifhsuoghpuognrgujbntquojwrnquowgnqe",
      };
      await dispatch({
        type: "CHANGE_UPLOADED",
        video: uploadVideoObj,
      });

      const userDocRef = doc(db, "users", currentUserId);
      await setDoc(userDocRef, {
        uploadedVideos: [...currentUploaded, uploadVideoObj],
      });
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

        <input type="file" accept="video/*" id="videoFileInput" />
        <input type="text" id="title" placeholder="Your video title" />
        <input
          type="text"
          id="description"
          placeholder="Your video description"
        />

        <Button
          variant="contained"
          onClick={uploadVideo}
          className={styles.uploadBtn}
        >
          Upload
        </Button>
      </Modal>
    </div>
  );
}
