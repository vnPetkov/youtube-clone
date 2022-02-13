import React, { useState } from "react";
import Search from "../search/Search"
import styles from "./Header.module.scss";
import header_logo from "../../images/header_logo.svg";
import header_delete from "../../images/header_delete.png";
import HomeCategories from "./HomeCategories";
import { Link, Route, Routes } from "react-router-dom";
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";

const API_KEY = 'AIzaSyAv-MkDUeNmYR9Kh1ON2ZOCRVj00qGO2L0';

export default function Header({search,setSearch , setSearchResults}) {

const searchVideos = (e)=>{
  e.preventDefault();
  fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&maxResults=25&part=snippet&q=${search}`)
    .then(res=>res.json())
    .then(data=>{
      setSearchResults(data);
    })
}

  return (
    <div className={styles.headerContainer}>
      <div>
        <div className={styles.header_burger_logo}>
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
            <input placeholder="Search" value={search} onChange={(e)=>{
              setSearch(e.target.value);
            }}/>

           

            {/* This will be hidden when input is empty */}
            {search !="" &&
              <span>
              <img src={header_delete} alt="delete" onClick={()=>{setSearch("")}}/>
            </span>
            }
          
            </form>
          </div>
          <Link to="/search_page">
            <button onClick={searchVideos}>
            <BsSearch />
            </button>
          </Link>
          <span>
            <FaMicrophone />
          </span>
        </div>

        <div className={styles.header_signin}>
          <span>
            <AppsIcon />
          </span>
          <span>
            <BsThreeDotsVertical />
          </span>
          <div>
            <span>
              <FaRegUserCircle />
            </span>
            <span>SIGN IN</span>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomeCategories />} />
      </Routes>
    </div>
  );
}
