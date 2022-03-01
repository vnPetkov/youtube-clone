import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/firebaseConfig";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import styles from "../buttons/UserManagerTabs.module.scss";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";

function HeaderTab() {
  const profileName = useSelector((state) => state.userData.name);
  const profilePicture = useSelector((state) => state.userData.profileImg);
  return (
    <div className={styles.header}>
      <Avatar
        alt={"profile"}
        src={profilePicture}
        sx={{ width: 45, height: 45 }}
      />
      <h3>{profileName}</h3>
    </div>
  );
}

function ChangePicTab() {
  const [inputIsActive, setInputIsActive] = useState(false);
  const curentUserId = useSelector((state) => state.userData.uid);

  const inputActive = () => setInputIsActive(!inputIsActive);

  const dispatch = useDispatch();
  const changePic = async () => {
    let input = document.getElementById("imgFileInput");
    let freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onload = async () => {
      let newProfImg = freader.result;
      console.log(newProfImg);
      dispatch({
        type: "CHANGE_PIC",
        newPic: newProfImg,
      });
      const userDoc = doc(db, "users", curentUserId);
      const newFields = {
        profileImg: newProfImg,
      };
      updateDoc(userDoc, newFields);
    };
  };
  return (
    <div className={styles.tab}>
      <div onClick={inputActive}>
        <AccountBoxOutlinedIcon />
        <h2>Change profile picture</h2>
      </div>
      <div
        className={
          inputIsActive ? styles.activeInputDiv : styles.inActiveInputDiv
        }
      >
        <input id="imgFileInput" type="file" accept="image/png, image/jpeg" />
        <button onClick={changePic}>Change</button>
      </div>
    </div>
  );
}

function ChangeNameTab() {
  const [inputIsActive, setInputIsActive] = useState(false);
  const [newName, setNewName] = useState("");

  const inputActive = () => setInputIsActive(!inputIsActive);

  const auth = getAuth();
  const dispatch = useDispatch();
  const changeName = async () => {
    dispatch({
      type: "CHANGE_NAME",
      newName: newName,
    });
    updateProfile(auth.currentUser, {
      displayName: newName,
    });
    document.getElementById("newNameInp").value = "";
  };
  return (
    <div className={styles.tab}>
      <div onClick={inputActive}>
        <DriveFileRenameOutlineOutlinedIcon />
        <h2>Change name</h2>
      </div>
      <div
        className={
          inputIsActive ? styles.activeInputDiv : styles.inActiveInputDiv
        }
      >
        <input
          id="newNameInp"
          onChange={(event) => setNewName(event.target.value)}
          type="text"
          size="10"
        />
        <button onClick={changeName}>Change</button>
      </div>
    </div>
  );
}

function SignOutTab() {
  const dispatch = useDispatch();
  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "CLEAR_COMMENTS" });
    await signOut(auth);
    localStorage.removeItem("user");
  };
  return (
    <div className={`${styles.tab} ${styles.signOut}`} onClick={logout}>
      <LogoutOutlinedIcon />
      <h2>Sign out</h2>
    </div>
  );
}
export { HeaderTab, ChangePicTab, ChangeNameTab, SignOutTab };
