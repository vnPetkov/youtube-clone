import React, { useState, useEffect } from "react";
import styles from "./HomeCategories.module.scss";

export default function HomeCategories() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Всички");
  let content = null;

  let apiKey = "AIzaSyA_7IYSyNXzIfLjkWLAjF-R7g5W8pdAcS8";

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=BG&key=${apiKey}`
    )
      .then((resp) => resp.json())
      .then((result) => setCategoriesList(result.items));
  }, []);

  let handleClick = (category) => {
    setActiveCategory(category);
  };

  if (categoriesList.length !== 0) {
    content = (
      <div>
        {categoriesList.map((category, index) => {
          return (
            <span
              className={
                activeCategory === category.snippet.title ? styles.active : ""
              }
              onClick={() => handleClick(category.snippet.title)}
              key={index}
            >
              {category.snippet.title}
            </span>
          );
        })}
      </div>
    );
  }
  return <div className={styles.categoriesContainer}>{content}</div>;
}
