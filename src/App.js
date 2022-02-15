import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/header/Header.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Home from "./components/home/Home.js";
import History from "./components/history/History";
import Upload from "./components/upload/Upload";
import Liked from "./components/liked/Liked";
import Search from "./components/search/Search";
import WatchVideo from "./components/watchVideo/WatchVideo";


function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);


  const API_KEY = "AIzaSyDKuYQmUW8Sza0hX2uexPM4dIG7mS440vU";


  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Header search={search} setSearch={setSearch} setSearchResults={setSearchResults} API_KEY={API_KEY} inputFocus={inputFocus} setInputFocus={setInputFocus}/>

        <div className="appPage">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Sidebar />
                  <Home />
                </>
              }
            />
            <Route
              path="/history_page"
              element={
                <>
                  <Sidebar />
                  <History />
                </>
              }
            />
            <Route
              path="/upload_page"
              element={
                <>
                  <Sidebar />
                  <Upload />
                </>
              }
            />
            <Route
              path="/liked_page"
              element={
                <>
                  <Sidebar />
                  <Liked />
                </>
              }
            />
            <Route
              path="/search_page"
              element={
                <>
                  <Sidebar />
                  <Search  searchResults={searchResults}/>
                </>
              }
            />
            <Route path="/watchVideo_page/:videoId"  element={<WatchVideo API_KEY={API_KEY}/>}  />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
