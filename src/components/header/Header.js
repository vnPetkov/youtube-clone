import React, { useEffect, useState } from "react";
import Autocomplete from "./Autocomplete"
import styles from "./Header.module.scss";
import header_logo from "../../images/header_logo.svg";
import header_delete from "../../images/header_delete.png";
import HomeCategories from "./HomeCategories";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";



export default function Header({ search, setSearch, setSearchResults, API_KEY, inputFocus, setInputFocus }) {
  const history = useNavigate();

  const [autocompleteResults, setAutocompleteResults] = useState([]);



  // DEBOUNCED AUTOCOMPLETE
  function fetchAutocomplete() {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&maxResults=15&part=snippet&q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAutocompleteResults(data);
      })
  }
  useEffect(() => {
    const timeOutId = setTimeout(() => fetchAutocomplete(), 500);
    return () => clearTimeout(timeOutId);
  }, [search]);


  const searchVideos = (e) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&maxResults=15&part=snippet&q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
        history("/search_page");
      });
  };



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
              <input
                placeholder="Search"
                onFocus={() => search.length > 3 && setInputFocus(true)}
                onBlur={() => setTimeout(() => {
                  setInputFocus(false)
                }, 250)}
                value={search}
                onChange={(e) => {
                  search.length < 3 ? setInputFocus(false) : setInputFocus(true)
                  setSearch(e.target.value);
                }}
              />

              {/* This will be hidden when input is empty */}
              {search != "" && (
                <span>
                  <img
                    src={header_delete}
                    alt="delete"
                    onClick={() => {
                      setInputFocus(false)
                      setSearch("");
                    }}
                  />
                </span>
              )}
            </form>
            {inputFocus && !autocompleteResults.error && <Autocomplete autocompleteResults={autocompleteResults} setInputFocus={setInputFocus} />}
          </div>

          <div onClick={searchVideos}>
            <button>
              <BsSearch />
            </button>
          </div>


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
