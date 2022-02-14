import styles from "./Autocomplete.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Autocomplete({ autocompleteResults }) {
    autocompleteResults = autocompleteResults.items;

    return (
        <div className={styles.header_autocomplete}>
            {autocompleteResults && autocompleteResults.map(item => {
                return (<Link to={`/watchVideo_page/${item.id.videoId}`}>
                    {item.snippet.title}
                </Link>)
            })}
        </div>
    )
}