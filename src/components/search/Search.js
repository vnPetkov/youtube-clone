import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import styles from "../cards/HorizontalCard.module.scss";
import HorizontalCard from "../cards/HorizontalCard";

export default function Search({ searchResults }) {
  searchResults = searchResults.items;
  return (
    <div className={styles.search_wrapper}>
      <div>
        <div>
          <TuneIcon />
          <p>FILTERS</p>
        </div>

        <div>
          {searchResults &&
            searchResults.map((element) => {
              return (
                <HorizontalCard
                  videoId={element.id.videoId}
                  img={element.snippet.thumbnails.high.url}
                  user={element.snippet.channelTitle}
                  title={element.snippet.title}
                  desc={element.snippet.description}
                  // userPic={userPic}
                  views="359578"
                  uploaded={element.snippet.publishedAt}
                  currentClass={styles.search_card}
                  key={element.id.videoId}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
