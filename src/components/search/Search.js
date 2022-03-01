import React, { useEffect } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import card_styles from "../cards/HorizontalCard.module.scss";
import styles from "./Search.module.scss";
import HorizontalCard from "../cards/HorizontalCard";

export default function Search({ searchResults }) {
  searchResults = searchResults.items;
  useEffect(() => {});
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
                  channelId={element.snippet.channelId}
                  views="359578"
                  uploaded={element.snippet.publishedAt}
                  currentClass={card_styles.search_card}
                  key={element.id.videoId}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
