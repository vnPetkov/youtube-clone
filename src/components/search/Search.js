import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import styles from "../cards/HorizontalCard.module.scss";
import HorizontalCard from "../cards/HorizontalCard";

export default function Search({searchResults}) {
  searchResults = searchResults.items;
  console.log(searchResults);
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
              console.log(element.snippet.thumbnails.high.url);
              return (
                <HorizontalCard
                  title={element.snippet.title}
                  img={element.snippet.thumbnails.high.url}
                  user={element.snippet.channelTitle}
                  desc={element.snippet.description}
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
