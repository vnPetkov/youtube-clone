import React, { useState } from "react";

export default async function FetchVideo(requiredNextPage) {
  let videos = [];
  let channels = [];
  let nextPageToken = requiredNextPage;

  let apiKey = "AIzaSyCnFTj5eA2iaolTqTq5IppRiwbGq-W1OFg";
  let finalResult;

  fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=BG&maxResults=24&regionCode=BG&key=${apiKey}&pageToken=${nextPageToken}`
  )
    .then((resp) => resp.json())
    .then((result) => {
      // console.log(result);
      nextPageToken = result.nextPageToken;
      videos = result.items;

      return Promise.all(
        result.items.map((video) => {
          return fetch(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${apiKey}`
          );
        })
      );
    })
    .then((resp) => {
      return Promise.all(resp.map((e) => e.json()));
    })
    .then((result) => {
      return result.map((е) => е.items);
    })
    .then((result) => {
      return result.flat();
    })
    .then((result) => {
      console.log("1 : ", result); ///////////////////////////
      channels = result;
      console.log("2 : ", channels); //////////////////////////
    })
    .then(() => {
      finalResult = [videos, channels, nextPageToken];
      console.log("ot fetch : ", finalResult);
      return finalResult;
    });
  // setTimeout(() => {
  //     return finalResult
  // }, 500)
}
