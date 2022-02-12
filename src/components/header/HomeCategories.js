import React, { useState } from "react";
import { categories } from "../../server/data";
import styles from "./HomeCategories.module.scss";

export default function HomeCategories() {
  const [activeCategory, setActiveCategory] = useState("Всички");

  let handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.categoriesContainer}>
      <div>
        {categories.map((category, index) => {
          return (
            <span
              className={activeCategory === category ? styles.active : ""}
              onClick={() => handleClick(category)}
              key={index}
            >
              {category}
            </span>
          );
        })}
      </div>
    </div>
  );
}
