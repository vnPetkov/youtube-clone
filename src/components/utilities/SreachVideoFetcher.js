import React from "react";
import API_KEY from "./API_KEY";

function SreachVideoFetcher(props) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&maxResults=15&part=snippet&q=${props.search}`
  )
    .then((res) => res.json())
    .then((data) => {});
}

export default SreachVideoFetcher;
