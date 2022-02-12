import { homeVideos } from "../../server/data";
import styles from "./Home.module.scss";
import HomeVideo from "./HomeVideo";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        {homeVideos.map((e, index) => {
          return (
            <HomeVideo
              key={index}
              img={e.img}
              channelImg={e.channelImg}
              channel={e.channel}
              title={e.title}
              views={e.views}
              timestamp={e.timestamp}
            />
          );
        })}
      </div>
    </div>
  );
}
