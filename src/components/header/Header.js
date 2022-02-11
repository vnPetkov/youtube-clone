import React from "react";
import styles from "./Header.module.css";
import header_logo from "../../images/header_logo.svg";
import header_delete from "../../images/header_delete.png";
import HomeCategories from "./HomeCategories";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
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
          <div className={styles.header_search_input}>
            <input placeholder="Search"></input>
            {/* This will be hidden when input is empty */}
            <span className={styles.header_search_del}>
              <img src={header_delete} alt="delete" />
            </span>
          </div>
          <Link to="/search_page">
            <span className={styles.header_searach_icon}>
              <BsSearch />
            </span>
          </Link>
          <span className={styles.header_searach_microphone}>
            <FaMicrophone />
          </span>
        </div>

        <div className={styles.header_signin}>
          <span className={styles.header_signin_apps}>
            <AppsIcon />
          </span>
          <span className={styles.header_sigin_dots}>
            <BsThreeDotsVertical />
          </span>
          <div className={styles.header_singin_user}>
            <span className={styles.header_sigin_user_logo}>
              <FaRegUserCircle />
            </span>
            <span className={styles.header_sigin_user_text}>SIGN IN</span>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomeCategories />} />
      </Routes>
    </div>
  );
}
