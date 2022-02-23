import styles from "./Sidebar.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({sidebarOpen}) {
  const { pathname } = useLocation();


  if (window.location.pathname === "/watchVideo_page") {
    return null;
  } else {
    return (
      sidebarOpen && (<div className={styles.sidebar}>
        <Link to="/" >
          <div className={pathname === "/" ? styles.tabActive : styles.tab}>
            <HomeIcon />
            <h2>Home</h2>
          </div>
        </Link>

        <Link to="/">
          <div className={`${styles.tab}`} >
            <ExploreOutlinedIcon />
            <h2>Explore</h2>
          </div>
        </Link>

        <Link to="/">
          <div className={`${styles.tab}`} >
            <MovieOutlinedIcon />
            <h2>Shorts</h2>
          </div>
        </Link>

        <Link to="/">
          <div className={`${styles.tab}`} >
            <SubscriptionsOutlinedIcon />
            <h2>Subscriptions</h2>
          </div>
        </Link>

        <div></div>

        <Link to="/">
          <div className={`${styles.tab}`} >
            <VideoLibraryOutlinedIcon />
            <h2>Library</h2>
          </div>
        </Link>

        <Link to="/history_page">
          <div className={pathname === "/history_page" ? styles.tabActive : styles.tab}>
            <HistoryIcon />
            <h2>History</h2>
          </div>
        </Link>

        <Link to="/upload_page">
          <div className={pathname === "/upload_page" ? styles.tabActive : styles.tab}>
            <SlideshowOutlinedIcon />
            <h2>Your videos</h2>
          </div>
        </Link>

        <Link to="/">
          <div className={`${styles.tab}`} >
            <AccessTimeOutlinedIcon />
            <h2>Watch Later</h2>
          </div>
        </Link>

        <Link to="/liked_page">
          <div className={pathname === "/liked_page" ? styles.tabActive : styles.tab}>
            <ThumbUpOutlinedIcon />
            <h2>Liked videos</h2>
          </div>
        </Link>
      </div>)
    );
  }
}
