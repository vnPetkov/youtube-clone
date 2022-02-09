import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Home from "./components/home/Home.js";
import History from "./components/history/History";
import Upload from "./components/upload/Upload";
import Liked from "./components/liked/Liked";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Header />

        <div className="appPage">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history_page" element={<History />} />
            <Route path="/upload_page" element={<Upload />} />
            <Route path="/liked_page" element={<Liked />} />
            <Route path="/search_page" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
