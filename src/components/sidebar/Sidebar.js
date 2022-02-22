import styles from "./Sidebar.module.scss";
import SidebarTab from "./SidebarTab";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  if (window.location.pathname === "/watchVideo_page") {
    return null;
  } else {
    return (
      <div className={styles.sidebar}>
        <Link to="/">
          <SidebarTab Icon={HomeIcon} tabName="Home" />
        </Link>
        <Link to="/">
          <SidebarTab Icon={ExploreOutlinedIcon} tabName="Explore" />
        </Link>
        <Link to="/">
          <SidebarTab Icon={MovieOutlinedIcon} tabName="Shorts" />
        </Link>
        <Link to="/">
          <SidebarTab
            Icon={SubscriptionsOutlinedIcon}
            tabName="Subscriptions"
          />
        </Link>
        <div></div>
        <Link to="/">
          <SidebarTab Icon={VideoLibraryOutlinedIcon} tabName="Library" />
        </Link>

        <Link to="/history_page">
          <SidebarTab Icon={HistoryIcon} tabName="History" />
        </Link>

        <Link to="/upload_page">
          <SidebarTab Icon={SlideshowOutlinedIcon} tabName="Your videos" />
        </Link>
        <Link to="/">
          <SidebarTab Icon={AccessTimeOutlinedIcon} tabName="Watch Later" />
        </Link>

        <Link to="/liked_page">
          <SidebarTab Icon={ThumbUpOutlinedIcon} tabName="Liked videos" />
        </Link>
      </div>
    );
  }
}
