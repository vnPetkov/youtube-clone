import API_KEY from "./API_KEY";

export default function FetchVideo(requiredNextPage) {
  let videos = [];
  let channels = [];
  let nextPageToken = requiredNextPage;

  let finalResult;

  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=BG&maxResults=24&regionCode=BG&key=${API_KEY}&pageToken=${nextPageToken}`
  )
    .then((resp) => resp.json())
    .then((result) => {
      nextPageToken = result.nextPageToken;
      videos = result.items;

      return Promise.all(
        result.items.map((video) => {
          return fetch(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${API_KEY}`
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
      channels = result;
    })
    .then(() => {
      finalResult = [videos, channels, nextPageToken];
      return finalResult;
    });
}
