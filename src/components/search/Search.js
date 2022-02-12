import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import styles from "../cards/horizontalCard.module.scss";
import HorizontalCard from "../cards/HorizontalCard";
import { testSearch } from "../../server/data";

export default function Search() {
  return (
    <div className={styles.search_wrapper}>
      <div>
        <div>
          <TuneIcon />
          <p>FILTERS</p>
        </div>

        <div>
          {testSearch.map(
            ({ title, img, user, userPic, desc, views, uploaded }) => {
              return (
                <HorizontalCard
                  title={title}
                  img={img}
                  user={user}
                  userPic={userPic}
                  desc={desc}
                  views={views}
                  uploaded={uploaded}
                  currentClass={styles.search_card}
                  key={title}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
