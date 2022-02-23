import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import { useSelector } from "react-redux";

function App() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const showHeader = useSelector((state) => state.navsDisplay.showHeader);

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
                  <Home selectedCategory={selectedCategory} />
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
            <Route
              path="/watchVideo_page/:videoId/"
              element={<WatchVideo />}
            />

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
