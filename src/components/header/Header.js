import React from "react";
import styles from "./Header.module.css";
import header_logo from "../../images/header_logo.svg";
<<<<<<< HEAD
import header_delete from "../../images/header_delete.png"
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';




export default function Header() {

    return (
        <div className={styles.header}>

            <div className={styles.header_burger_logo}>
                <span><MenuIcon /></span>
                <div>
                    <img src={header_logo} alt="logo"></img>
                </div>
            </div>

            <div className={styles.header_search}>
                <div className={styles.header_search_input}>
                    <input placeholder='Search'></input>
                    {/* This will be hidden when input is empty */}
                    <span className={styles.header_search_del}>
                        <img src={header_delete} alt="delete" />
                    </span>

                </div>
                <span className={styles.header_searach_icon}><BsSearch /></span>
                <span className={styles.header_searach_microphone}><FaMicrophone /></span>

            </div>

            <div className={styles.header_signin}>
                <span className={styles.header_signin_apps} fon><AppsIcon/></span>
                <span className={styles.header_sigin_dots}><BsThreeDotsVertical /></span>
                <div className={styles.header_singin_user}>
                    <span className={styles.header_sigin_user_logo}><FaRegUserCircle /></span>
                    <span className={styles.header_sigin_user_text}>SIGN IN</span>
                </div>
            </div>


=======
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_burger_logo}>
        <span>
          <GiHamburgerMenu />
        </span>
        <div>
          <img src={header_logo} alt="logo"></img>
>>>>>>> 283782053d381ce61ec09a9bcbcd896f5ca1a31d
        </div>
      </div>

      <div className={styles.header_search}>
        <input placeholder="Search"></input>

        <Link to="/search_page">
          <FaSearch />
        </Link>

        <span>
          <FaMicrophone />
        </span>
      </div>

      <div className={styles.header_signin}>
        <a>Sign in</a>
      </div>
    </div>
  );
}
