import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Header from "./components/header/Header.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Home from "./components/home/Home.js";
import History from "./components/history/History";
import Upload from "./components/upload/Upload";
import Liked from "./components/liked/Liked";
import Search from "./components/search/Search";
import WatchVideo from "./components/watchVideo/WatchVideo";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Channel from "./components/channel/Channel";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../src/firebase/firebaseConfig";

function App() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const showHeader = useSelector((state) => state.navsDisplay.showHeader);

  const auth = getAuth();
  const dispatch = useDispatch();

  const path = window.location.pathname
  useEffect(() => {
    if (path === '/login' || path === "register") {
      dispatch({ type: "LOGIN_OPENED" })
    } else {
      dispatch({ type: "LOGIN_CLOSED" })
    }
  }, [path])

  useEffect(() => {
    window.addEventListener("load", async () => {
      let storageUser = JSON.parse(localStorage.getItem("user"));
      if (storageUser) {
        const user = await signInWithEmailAndPassword(
          auth,
          storageUser[0],
          storageUser[1]
        );

        localStorage.setItem(
          "user",
          JSON.stringify([storageUser[0], storageUser[1]])
        );

        const userDocRef = doc(db, "users", user.user.uid);
        const docSnap = await getDoc(userDocRef);
        let dataBaseHistory = docSnap.data().historyVideos;
        let dataBaseLiked = docSnap.data().likedVideos;
        let dataBaseDisliked = docSnap.data().dislikedVideos;
        let dataBaseUploaded = docSnap.data().uploadedVideos;

        dispatch({
          type: "LOGIN",
          profileUid: user.user.uid,
          userName: user.user.displayName,
          image: user.user.photoURL,
          history: dataBaseHistory,
          liked: dataBaseLiked,
          disliked: dataBaseDisliked,
          uploaded: dataBaseUploaded,
        });
      }

    });
  }, []);

  return (
    <div className="content-wrapper">
      <BrowserRouter>
        {showHeader && (
          <Header
            setSelectedCategory={setSelectedCategory}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            search={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            inputFocus={inputFocus}
            setInputFocus={setInputFocus}
          />
        )}

        <div className="appPage">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Sidebar sidebarOpen={sidebarOpen} />
                  <Home
                    selectedCategory={selectedCategory}
                    setSidebarOpen={setSidebarOpen}
                  />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/history_page"
              element={
                <>
                  <Sidebar sidebarOpen={sidebarOpen} />
                  <History />
                </>
              }
            />
            <Route
              path="/upload_page"
              element={
                <>
                  <Sidebar sidebarOpen={sidebarOpen} />
                  <Upload />
                </>
              }
            />
            <Route
              path="/liked_page"
              element={
                <>
                  <Sidebar sidebarOpen={sidebarOpen} />
                  <Liked />
                </>
              }
            />
            <Route
              path="/search_page"
              element={
                <>
                  <Sidebar sidebarOpen={sidebarOpen} />
                  <Search searchResults={searchResults} />
                </>
              }
            />
            <Route path="/watchVideo_page/:videoId/" element={<WatchVideo />} />

            <Route
              path="/channel/:channelid"
              element={
                <>
                  <Sidebar sidebarOpen={sidebarOpen} />
                  <Channel />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
