import API_KEY from "../utilities/API_KEY";
import React, { useEffect, useState } from "react";

import Autocomplete from "./Autocomplete";
import SignInButton from "../buttons/SignInButton";
import styles from "./Header.module.scss";
import header_logo from "../../images/header_logo.svg";
import header_delete from "../../images/header_delete.png";
import HomeCategories from "./HomeCategories";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import {
  HeaderTab,
  ChangePicTab,
  ChangeNameTab,
  SignOutTab,
} from "../buttons/UserManagerTabs";
import { useDispatch, useSelector } from "react-redux";
import UploadModal from "./UploadModal";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Avatar } from "@mui/material";

export default function Header({
  setSelectedCategory,
  sidebarOpen,
  setSidebarOpen,
  search,
  setSearch,
  setSearchResults,
  inputFocus,
  setInputFocus,
}) {
  const history = useNavigate();

  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentUploaded, setCurrentUploaded] = useState([]);
  const [userManagerIsActive, setUserManagerIsVisible] = useState(false);

  const logged = useSelector((state) => state.userData.logged);
  const currentUserId = useSelector((state) => state.userData.uid);
  const profilePicture = useSelector((state) => state.userData.profileImg);

  const uploadedArr = useSelector((state) => state.userData.uploadedVideos);
  useEffect(() => {
    setCurrentUploaded(uploadedArr);
  }, [uploadedArr]);

  function openModal() {
    setIsOpen(true);
  }

  // DEBOUNCED AUTOCOMPLETE
  function fetchAutocomplete() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&maxResults=15&part=snippet&q=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAutocompleteResults(data);
      });
  }
  useEffect(() => {
    const timeOutId = setTimeout(() => fetchAutocomplete(), 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  const searchVideos = (e) => {
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&maxResults=15&part=snippet&q=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
        setInputFocus(false);
        history("/search_page");
      });
  };

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
    <div className={styles.headerContainer}>
      <div>
        <div
          className={styles.header_burger_logo}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span>
            <MenuIcon />
          </span>
          <Link to="/">
            <div>
              <img src={header_logo} alt="logo"></img>
            </div>
          </Link>
        </div>

        <div className={styles.header_search}>
          <div>
            <form onSubmit={searchVideos}>
              <input
                placeholder="Search"
                onFocus={() => search.length > 3 && setInputFocus(true)}
                onBlur={() =>
                  setTimeout(() => {
                    setInputFocus(false);
                  }, 250)
                }
                value={search}
                onChange={(e) => {
                  search.length < 3
                    ? setInputFocus(false)
                    : setInputFocus(true);
                  setSearch(e.target.value);
                }}
              />

              {search != "" && (
                <span>
                  <img
                    src={header_delete}
                    alt="delete"
                    onClick={() => {
                      setInputFocus(false);
                      setSearch("");
                    }}
                  />
                </span>
              )}
            </form>

            {inputFocus && !autocompleteResults.error && (
              <Autocomplete
                setSearch={setSearch}
                searchVideos={(e) => searchVideos(e)}
                autocompleteResults={autocompleteResults}
                setInputFocus={setInputFocus}
                search={search}
              />
            )}
          </div>

          <div>
            <button onClick={(e) => searchVideos(e)}>
              <BsSearch />
            </button>
          </div>

          <span>
            <FaMicrophone />
          </span>
        </div>

        <div className={styles.header_signin}>
          <span className={styles.videoUploadSpan}>
            <VideoCallOutlinedIcon onClick={openModal} />
            <UploadModal
              uploadVideo={uploadVideo}
              modalIsOpen={modalIsOpen}
              setIsOpen={setIsOpen}
            />
          </span>
          <span>
            <AppsIcon />
          </span>
          <span>
            <BsThreeDotsVertical />
          </span>
          {logged ? (
            <>
              <Avatar
                className={styles.avatar}
                alt={"profile"}
                src={profilePicture}
                sx={{ width: 30, height: 30 }}
                onClick={() => {
                  setUserManagerIsVisible(!userManagerIsActive);
                }}
              />
              <div
                className={
                  userManagerIsActive
                    ? styles.activeUserManager
                    : styles.inActiveUserManager
                }
              >
                <HeaderTab />
                <ChangePicTab />
                <ChangeNameTab />
                <SignOutTab />
              </div>
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={<HomeCategories setSelectedCategory={setSelectedCategory} />}
        />
      </Routes>
    </div>
  );
}
