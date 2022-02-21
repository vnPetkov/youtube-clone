import api_key from "./api_key";

export default function FetchVideosById(idArr) {
  console.log("активиране ");

  let idString = idArr.map((id) => "&id=" + id).join("");
  let finalResult = [];

  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics${idString}&key=${api_key}`
  )
    .then((resp) => resp.json())
    .then((result) => result.items)
    .then((result) => {
      finalResult = result;
      console.log(finalResult);
      return finalResult;
    });
}
