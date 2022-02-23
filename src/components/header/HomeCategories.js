import React, { useState, useEffect } from "react";
import styles from "./HomeCategories.module.scss";
import API_KEY from "../utilities/API_KEY";

export default function HomeCategories({setSelectedCategory}) {
  const [categoriesList, setCategoriesList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Всички");
  let content = null;


  // function fetchByCategory(title) {
  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${title}&type=video&key=${API_KEY}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res)
  //     })
  // }


  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=BG&key=${API_KEY}`)
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

          let categoryTitle = category.snippet.title;
          return (
            <span
              className={
                activeCategory === category.snippet.title ? styles.active : ""
              }
              onClick={() => {
                setSelectedCategory(categoryTitle)
                handleClick(category.snippet.title)
              }}
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
