import styles from "./Autocomplete.module.scss";

export default function Autocomplete({ autocompleteResults, setInputFocus,setSearch, searchVideos,search }) {
  autocompleteResults = autocompleteResults.items;


  return (
    <div className={styles.header_autocomplete}>
      {autocompleteResults &&
        autocompleteResults.map((item) => {
          return (
            <a
              key={item.id.videoId}
              onClick={(e) => {
                setSearch(item.snippet.title)
                searchVideos(e)
                console.log(search)
                setInputFocus(false)}}
            >
              {item.snippet.title}
            </a>
          );
        })}
    </div>
  );
}
