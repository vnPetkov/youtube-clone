import styles from "./Sidebar.module.css";
import SidebarTab from "./SidebarTab";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { BrowserRouter, Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <SidebarTab Icon={HomeIcon} tabName="Начало" />
      </Link>

      <Link to="/history_page">
        <SidebarTab Icon={HistoryIcon} tabName="История" />
      </Link>

      <Link to="/upload_page">
        <SidebarTab
          Icon={VideoLibraryOutlinedIcon}
          tabName="Вашите видеоклипове"
        />
      </Link>

      <Link to="/liked_page">
        <SidebarTab
          Icon={ThumbUpOutlinedIcon}
          tabName="Харесани видеоклипове"
        />
      </Link>
    </div>
  );
}
