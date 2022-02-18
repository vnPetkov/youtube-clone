import styles from "./History.module.scss";

import HorizontalCard from "../cards/HorizontalCard";
import card_styles from "../cards/HorizontalCard.module.scss";

export default function HistorySignedIn() {

    return (
        <div className={styles.HistorySignedIn}>
            <h4>История на гледане</h4>
            <div className={styles.historyCards}>
                <HorizontalCard
                    videoId="YQHsXMglC9A"
                    img="https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg"
                    user="AdeleVEVO"
                    title="Adele - Hello"
                    desc="Music video by Pop Smoke performing Hello (Audio). © 2020 Republic Records, a division of UMG Recordings, Inc. & Victor Victor ..."
                    views="359578"
                    currentClass={card_styles.history_card}
                    key="YQHsXMglC9A"
                />

                <HorizontalCard
                    videoId="YQHsXMglC9A"
                    img="https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg"
                    user="AdeleVEVO"
                    title="Adele - Hello"
                    desc="Music video by Pop Smoke performing Hello (Audio). © 2020 Republic Records, a division of UMG Recordings, Inc. & Victor Victor ..."
                    views="359578"
                    currentClass={card_styles.history_card}
                    key="YQHsXMglC9A"
                />
            </div>
        </div>
    )
}