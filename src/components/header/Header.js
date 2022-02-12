import React from "react";
import styles from "./Header.module.scss";
import header_logo from "../../images/header_logo.svg";
import header_delete from "../../images/header_delete.png";
import HomeCategories from "./HomeCategories";

import { Link, Route, Routes } from "react-router-dom";
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";

export default function Header() {
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
            <input placeholder="Search"></input>
            {/* This will be hidden when input is empty */}
            <span>
              <img src={header_delete} alt="delete" />
            </span>
          </div>
          <Link to="/search_page">
            <span>
              <BsSearch />
            </span>
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
