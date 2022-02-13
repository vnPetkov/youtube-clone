import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import styles from "../cards/HorizontalCard.module.scss";
import HorizontalCard from "../cards/HorizontalCard";
import { testSearch } from "../../server/data";

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
                  // userPic={userPic}
                  desc={element.snippet.description}
                  // views={views}
                  // uploaded={uploaded}
                  currentClass={styles.search_card}
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
