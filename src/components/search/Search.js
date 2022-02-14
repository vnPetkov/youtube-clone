import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import styles from "../cards/HorizontalCard.module.scss";
import HorizontalCard from "../cards/HorizontalCard";

export default function Search({searchResults}) {
  searchResults = searchResults.items;
  return (
    <div className={styles.search_wrapper}>
      <div>
        <div>
          <TuneIcon />
          <p>FILTERS</p>
        </div>

        <div>
          {searchResults && searchResults.map(
            (element) => {
              return (
                <HorizontalCard
                  title={element.snippet.title}
                  img={element.snippet.thumbnails.high.url}
                  user={element.snippet.channelTitle}
                  desc={element.snippet.description}
                  videoId={element.id.videoId}
                  currentClass={styles.search_card}
                  // userPic={userPic}
                  // views={views}
                  // uploaded={uploaded}
                  // key={title}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
