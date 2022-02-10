import React from "react";
import styles from "./Header.module.css";
import Button from "@mui/material/Button";

export default function HomeFilters() {
  return (
    <div className={styles.homeFilters}>
      <Button variant="outlined">Мис баба 2021</Button>
    </div>
  );
}
