import React from 'react'
import styles from "./Header.module.css";
import header_logo from "../../images/header_logo.svg";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";




export default function Header() {

    return (
        <div className={styles.header}>

            <div className={styles.header_burger_logo}>
                <span><GiHamburgerMenu /></span>
                <div>
                    <img src={header_logo}></img>
                </div>
            </div>

            <div className={styles.header_search}>
                <input placeholder='Search'></input>
                <a><FaSearch /></a>
                <span><FaMicrophone /></span>

            </div>

            <div className={styles.header_signin}>

                <a>Sign in</a>
            </div>


        </div>
    )

}

