import api_key from "./api_key";

export default function FetchVideosById(idArr) {
  let idString = [...idArr.map((id) => "&id=" + id)];
  let finalResult = [];
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics${idString}&key=${api_key}`
  )
    .then((resp) => resp.json())
    .then((result) => result.items)
    .then((result) => {
      finalResult = result;
      return finalResult;
    });
}
