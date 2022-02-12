import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import styles from "../cards/Search_card.module.scss";
import Search_card from "../cards/Search_card";

export default function Search() {
  let testSearch = [
    {
      title: "G-Eazy - Random (Official Audio)",
      img: "https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg",
      user: "G-Eazy",
      userPic:
        "https://yt3.ggpht.com/GDvg8-AlnhdsRKFVWFjPSMvSmFht-hQknhgByLaIw4z6n8YYzHZaPi48f2-dlG42kOSCbDljBFk=s88-c-k-c0x00ffffff-no-rj",
      desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
      views: "34M",
      uploaded: "6 years ago",
    },
    {
      title: "LoL Gameplay",
      img: "https://cdn.europosters.eu/image/1300/posters/league-of-legends-champions-i102252.jpg",
      user: "Riot Games",
      userPic:
        "https://cdn.vox-cdn.com/thumbor/qcB2PjDbMcV3TtOGTdPNOwdwzpQ=/0x0:7200x3066/1200x800/filters:focal(2642x724:3794x1876)/cdn.vox-cdn.com/uploads/chorus_image/image/70352203/ARCANE_S1_00030.0.jpg",
      desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
      views: "500k",
      uploaded: "1 year ago",
    },
    {
      title: "Eminem - Without you",
      img: "https://i1.sndcdn.com/avatars-000227103862-tfu8r3-t500x500.jpg",
      user: "user123",
      userPic:
        "https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      desc: "asd213xasdsadas ...",
      views: "3M",
      uploaded: "3 years ago",
    },
    {
      title: "Random Video",
      img: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
      user: "user2222",
      userPic:
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      views: "34M",
      uploaded: "6 years ago",
    },
  ];
  return (
    <div className={styles.search_wrapper}>
      <div>
        <div>
          <TuneIcon />
          <p>FILTERS</p>
        </div>

        <div>
          {testSearch.map(
            ({ title, img, user, userPic, desc, views, uploaded }) => {
              return (
                <Search_card
                  title={title}
                  img={img}
                  user={user}
                  userPic={userPic}
                  desc={desc}
                  views={views}
                  uploaded={uploaded}
                  key={title}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
