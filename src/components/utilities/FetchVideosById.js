import API_KEY from "./API_KEY";

export default function FetchVideosById(idArr) {
  console.log("активиране ");

  let idString = idArr.map((id) => "&id=" + id).join("");
  let finalResult = [];

  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics${idString}&key=${API_KEY}`
  )
    .then((resp) => resp.json())
    .then((result) => result.items)
    .then((result) => {
      finalResult = result;
      console.log(finalResult);
      return finalResult;
    });
}
