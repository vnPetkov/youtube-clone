import React, { useState } from "react";
import styles from "./HomeCategories.module.scss";

export default function HomeCategories() {
  const [activeCategory, setActiveCategory] = useState("Всички");

  const categories = [
    "Всички",
    "Варене на ракия",
    "Миксове",
    "Музика",
    "Мис баба 2022",
    "Природа",
    "Кози",
    "Изкуство",
    "Бански дядо",
    "На живо",
    "Фитнес",
    "Аниме",
    "Кокошки",
  ];

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
