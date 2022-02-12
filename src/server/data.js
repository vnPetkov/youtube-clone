const categories = [
  "Всички",
  "Варене на ракия",
  "Миксове",
  "Музика",
  "Мис баба 2022",
  "Природа",
  "Кози",
  "Изкуство",
  "Бански дядо",
  "На живо",
  "Фитнес",
  "Аниме",
  "Кокошки",
];

const homeVideos = [
  {
    img: "https://i.ytimg.com/vi/lheapd7bgLA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiLqulhrTi8vWAHqDKlnk3cQBNNg",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLQO2-DfuqwtPYTqBcZ8rEWt8g4p1sB_LyddKS5msQ=s68-c-k-c0x00ffffff-no-rj",
    channel: "Kurzgesagt",
    title: "What Happens if the Moon Crashes into Earth?",
    views: "3,4 млн. показвания",
    timestamp: "преди 1 ден",
  },
  {
    img: "https://i.ytimg.com/vi/88oX1GsDFrQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfjQML5PsAgzUuCRF84z9HT6gQ7Q",
    channelImg:
      "https://yt3.ggpht.com/uRH8BsGICrSK59oh91g0CcfKHRgL1slecUSjrRhWvkx03w26FTg-jahk1nLYzuAD1xkOlULWBQ=s88-c-k-c0x00ffffff-no-rj",
    channel: "Oliver Heldens",
    title: "Oliver Heldens - Heldeep Radio #398",
    views: "17 хил. показвания",
    timestamp: "преди 4 дни",
  },
  {
    img: "https://i.ytimg.com/vi/crZfT5qnFdA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuVavKWNfmcc4sEjPQzDmVMQVftw",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLTP7veiWCs8VWF8uxh1wiMwGCGnSGInjQlicctG=s68-c-k-c0x00ffffff-no-rj",
    channel: "Cercle",
    title: "Disclosure at Plitvice Lakes National Park, in Croatia for Cercle",
    views: "6,7 млн. показвания",
    timestam: "преди 1 година",
  },
  {
    img: "https://i.ytimg.com/vi/lheapd7bgLA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiLqulhrTi8vWAHqDKlnk3cQBNNg",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLQO2-DfuqwtPYTqBcZ8rEWt8g4p1sB_LyddKS5msQ=s68-c-k-c0x00ffffff-no-rj",
    channel: "Kurzgesagt",
    title: "What Happens if the Moon Crashes into Earth?",
    views: "3,4 млн. показвания",
    timestamp: "преди 1 ден",
  },
  {
    img: "https://i.ytimg.com/vi/88oX1GsDFrQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfjQML5PsAgzUuCRF84z9HT6gQ7Q",
    channelImg:
      "https://yt3.ggpht.com/uRH8BsGICrSK59oh91g0CcfKHRgL1slecUSjrRhWvkx03w26FTg-jahk1nLYzuAD1xkOlULWBQ=s88-c-k-c0x00ffffff-no-rj",
    channel: "Oliver Heldens",
    title: "Oliver Heldens - Heldeep Radio #398",
    views: "17 хил. показвания",
    timestamp: "преди 4 дни",
  },
  {
    img: "https://i.ytimg.com/vi/crZfT5qnFdA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuVavKWNfmcc4sEjPQzDmVMQVftw",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLTP7veiWCs8VWF8uxh1wiMwGCGnSGInjQlicctG=s68-c-k-c0x00ffffff-no-rj",
    channel: "Cercle",
    title: "Disclosure at Plitvice Lakes National Park, in Croatia for Cercle",
    views: "6,7 млн. показвания",
    timestam: "преди 1 година",
  },
  {
    img: "https://i.ytimg.com/vi/lheapd7bgLA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiLqulhrTi8vWAHqDKlnk3cQBNNg",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLQO2-DfuqwtPYTqBcZ8rEWt8g4p1sB_LyddKS5msQ=s68-c-k-c0x00ffffff-no-rj",
    channel: "Kurzgesagt",
    title: "What Happens if the Moon Crashes into Earth?",
    views: "3,4 млн. показвания",
    timestamp: "преди 1 ден",
  },
  {
    img: "https://i.ytimg.com/vi/88oX1GsDFrQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfjQML5PsAgzUuCRF84z9HT6gQ7Q",
    channelImg:
      "https://yt3.ggpht.com/uRH8BsGICrSK59oh91g0CcfKHRgL1slecUSjrRhWvkx03w26FTg-jahk1nLYzuAD1xkOlULWBQ=s88-c-k-c0x00ffffff-no-rj",
    channel: "Oliver Heldens",
    title: "Oliver Heldens - Heldeep Radio #398",
    views: "17 хил. показвания",
    timestamp: "преди 4 дни",
  },
  {
    img: "https://i.ytimg.com/vi/crZfT5qnFdA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuVavKWNfmcc4sEjPQzDmVMQVftw",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLTP7veiWCs8VWF8uxh1wiMwGCGnSGInjQlicctG=s68-c-k-c0x00ffffff-no-rj",
    channel: "Cercle",
    title: "Disclosure at Plitvice Lakes National Park, in Croatia for Cercle",
    views: "6,7 млн. показвания",
    timestam: "преди 1 година",
  },
  {
    img: "https://i.ytimg.com/vi/lheapd7bgLA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiLqulhrTi8vWAHqDKlnk3cQBNNg",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLQO2-DfuqwtPYTqBcZ8rEWt8g4p1sB_LyddKS5msQ=s68-c-k-c0x00ffffff-no-rj",
    channel: "Kurzgesagt",
    title: "What Happens if the Moon Crashes into Earth?",
    views: "3,4 млн. показвания",
    timestamp: "преди 1 ден",
  },
  {
    img: "https://i.ytimg.com/vi/88oX1GsDFrQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfjQML5PsAgzUuCRF84z9HT6gQ7Q",
    channelImg:
      "https://yt3.ggpht.com/uRH8BsGICrSK59oh91g0CcfKHRgL1slecUSjrRhWvkx03w26FTg-jahk1nLYzuAD1xkOlULWBQ=s88-c-k-c0x00ffffff-no-rj",
    channel: "Oliver Heldens",
    title: "Oliver Heldens - Heldeep Radio #398",
    views: "17 хил. показвания",
    timestamp: "преди 4 дни",
  },
  {
    img: "https://i.ytimg.com/vi/crZfT5qnFdA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuVavKWNfmcc4sEjPQzDmVMQVftw",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLTP7veiWCs8VWF8uxh1wiMwGCGnSGInjQlicctG=s68-c-k-c0x00ffffff-no-rj",
    channel: "Cercle",
    title: "Disclosure at Plitvice Lakes National Park, in Croatia for Cercle",
    views: "6,7 млн. показвания",
    timestam: "преди 1 година",
  },
  {
    img: "https://i.ytimg.com/vi/lheapd7bgLA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiLqulhrTi8vWAHqDKlnk3cQBNNg",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLQO2-DfuqwtPYTqBcZ8rEWt8g4p1sB_LyddKS5msQ=s68-c-k-c0x00ffffff-no-rj",
    channel: "Kurzgesagt",
    title: "What Happens if the Moon Crashes into Earth?",
    views: "3,4 млн. показвания",
    timestamp: "преди 1 ден",
  },
  {
    img: "https://i.ytimg.com/vi/88oX1GsDFrQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfjQML5PsAgzUuCRF84z9HT6gQ7Q",
    channelImg:
      "https://yt3.ggpht.com/uRH8BsGICrSK59oh91g0CcfKHRgL1slecUSjrRhWvkx03w26FTg-jahk1nLYzuAD1xkOlULWBQ=s88-c-k-c0x00ffffff-no-rj",
    channel: "Oliver Heldens",
    title: "Oliver Heldens - Heldeep Radio #398",
    views: "17 хил. показвания",
    timestamp: "преди 4 дни",
  },
  {
    img: "https://i.ytimg.com/vi/crZfT5qnFdA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuVavKWNfmcc4sEjPQzDmVMQVftw",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLTP7veiWCs8VWF8uxh1wiMwGCGnSGInjQlicctG=s68-c-k-c0x00ffffff-no-rj",
    channel: "Cercle",
    title: "Disclosure at Plitvice Lakes National Park, in Croatia for Cercle",
    views: "6,7 млн. показвания",
    timestam: "преди 1 година",
  },
  {
    img: "https://i.ytimg.com/vi/lheapd7bgLA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiLqulhrTi8vWAHqDKlnk3cQBNNg",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLQO2-DfuqwtPYTqBcZ8rEWt8g4p1sB_LyddKS5msQ=s68-c-k-c0x00ffffff-no-rj",
    channel: "Kurzgesagt",
    title: "What Happens if the Moon Crashes into Earth?",
    views: "3,4 млн. показвания",
    timestamp: "преди 1 ден",
  },
  {
    img: "https://i.ytimg.com/vi/88oX1GsDFrQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfjQML5PsAgzUuCRF84z9HT6gQ7Q",
    channelImg:
      "https://yt3.ggpht.com/uRH8BsGICrSK59oh91g0CcfKHRgL1slecUSjrRhWvkx03w26FTg-jahk1nLYzuAD1xkOlULWBQ=s88-c-k-c0x00ffffff-no-rj",
    channel: "Oliver Heldens",
    title: "Oliver Heldens - Heldeep Radio #398",
    views: "17 хил. показвания",
    timestamp: "преди 4 дни",
  },
  {
    img: "https://i.ytimg.com/vi/crZfT5qnFdA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuVavKWNfmcc4sEjPQzDmVMQVftw",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLTP7veiWCs8VWF8uxh1wiMwGCGnSGInjQlicctG=s68-c-k-c0x00ffffff-no-rj",
    channel: "Cercle",
    title: "Disclosure at Plitvice Lakes National Park, in Croatia for Cercle",
    views: "6,7 млн. показвания",
    timestam: "преди 1 година",
  },
  {
    img: "https://i.ytimg.com/vi/lheapd7bgLA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiLqulhrTi8vWAHqDKlnk3cQBNNg",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLQO2-DfuqwtPYTqBcZ8rEWt8g4p1sB_LyddKS5msQ=s68-c-k-c0x00ffffff-no-rj",
    channel: "Kurzgesagt",
    title: "What Happens if the Moon Crashes into Earth?",
    views: "3,4 млн. показвания",
    timestamp: "преди 1 ден",
  },
  {
    img: "https://i.ytimg.com/vi/88oX1GsDFrQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfjQML5PsAgzUuCRF84z9HT6gQ7Q",
    channelImg:
      "https://yt3.ggpht.com/uRH8BsGICrSK59oh91g0CcfKHRgL1slecUSjrRhWvkx03w26FTg-jahk1nLYzuAD1xkOlULWBQ=s88-c-k-c0x00ffffff-no-rj",
    channel: "Oliver Heldens",
    title: "Oliver Heldens - Heldeep Radio #398",
    views: "17 хил. показвания",
    timestamp: "преди 4 дни",
  },
  {
    img: "https://i.ytimg.com/vi/crZfT5qnFdA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuVavKWNfmcc4sEjPQzDmVMQVftw",
    channelImg:
      "https://yt3.ggpht.com/ytc/AKedOLTP7veiWCs8VWF8uxh1wiMwGCGnSGInjQlicctG=s68-c-k-c0x00ffffff-no-rj",
    channel: "Cercle",
    title: "Disclosure at Plitvice Lakes National Park, in Croatia for Cercle",
    views: "6,7 млн. показвания",
    timestam: "преди 1 година",
  },
];

const testSearch = [
  {
    title: "G-Eazy - Random (Official Audio)",
    img: "https://i.ytimg.com/vi/oCNucnhn6fU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkfbkfcpf3KuRnosdIgHRoa0C2Eg",
    user: "G-Eazy",
    userPic:
      "https://yt3.ggpht.com/GDvg8-AlnhdsRKFVWFjPSMvSmFht-hQknhgByLaIw4z6n8YYzHZaPi48f2-dlG42kOSCbDljBFk=s88-c-k-c0x00ffffff-no-rj",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "LoL Gameplay",
    img: "https://cdn.europosters.eu/image/1300/posters/league-of-legends-champions-i102252.jpg",
    user: "Riot Games",
    userPic:
      "https://cdn.vox-cdn.com/thumbor/qcB2PjDbMcV3TtOGTdPNOwdwzpQ=/0x0:7200x3066/1200x800/filters:focal(2642x724:3794x1876)/cdn.vox-cdn.com/uploads/chorus_image/image/70352203/ARCANE_S1_00030.0.jpg",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "500 хил, показвания",
    uploaded: "преди 1 година",
  },
  {
    title: "Eminem - Without you",
    img: "https://i1.sndcdn.com/avatars-000227103862-tfu8r3-t500x500.jpg",
    user: "user123",
    userPic:
      "https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    desc: "asd213xasdsadas ...",
    views: "3 млн. показвания",
    uploaded: "преди 3 години",
  },
  {
    title: "Random Video",
    img: "https://i.ytimg.com/vi/cQZqPi1aHNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMFTyaS7tRry3pHkCVxZt2LDgUgw",
    user: "user2222",
    userPic:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "G-Eazy - Random (Official Audio)",
    img: "https://i.ytimg.com/vi/oCNucnhn6fU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkfbkfcpf3KuRnosdIgHRoa0C2Eg",
    user: "G-Eazy",
    userPic:
      "https://yt3.ggpht.com/GDvg8-AlnhdsRKFVWFjPSMvSmFht-hQknhgByLaIw4z6n8YYzHZaPi48f2-dlG42kOSCbDljBFk=s88-c-k-c0x00ffffff-no-rj",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "LoL Gameplay",
    img: "https://cdn.europosters.eu/image/1300/posters/league-of-legends-champions-i102252.jpg",
    user: "Riot Games",
    userPic:
      "https://cdn.vox-cdn.com/thumbor/qcB2PjDbMcV3TtOGTdPNOwdwzpQ=/0x0:7200x3066/1200x800/filters:focal(2642x724:3794x1876)/cdn.vox-cdn.com/uploads/chorus_image/image/70352203/ARCANE_S1_00030.0.jpg",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "500 хил, показвания",
    uploaded: "преди 1 година",
  },
  {
    title: "Eminem - Without you",
    img: "https://i1.sndcdn.com/avatars-000227103862-tfu8r3-t500x500.jpg",
    user: "user123",
    userPic:
      "https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    desc: "asd213xasdsadas ...",
    views: "3 млн. показвания",
    uploaded: "преди 3 години",
  },
  {
    title: "Random Video",
    img: "https://i.ytimg.com/vi/cQZqPi1aHNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMFTyaS7tRry3pHkCVxZt2LDgUgw",
    user: "user2222",
    userPic:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "G-Eazy - Random (Official Audio)",
    img: "https://i.ytimg.com/vi/oCNucnhn6fU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkfbkfcpf3KuRnosdIgHRoa0C2Eg",
    user: "G-Eazy",
    userPic:
      "https://yt3.ggpht.com/GDvg8-AlnhdsRKFVWFjPSMvSmFht-hQknhgByLaIw4z6n8YYzHZaPi48f2-dlG42kOSCbDljBFk=s88-c-k-c0x00ffffff-no-rj",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "LoL Gameplay",
    img: "https://cdn.europosters.eu/image/1300/posters/league-of-legends-champions-i102252.jpg",
    user: "Riot Games",
    userPic:
      "https://cdn.vox-cdn.com/thumbor/qcB2PjDbMcV3TtOGTdPNOwdwzpQ=/0x0:7200x3066/1200x800/filters:focal(2642x724:3794x1876)/cdn.vox-cdn.com/uploads/chorus_image/image/70352203/ARCANE_S1_00030.0.jpg",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "500 хил, показвания",
    uploaded: "преди 1 година",
  },
  {
    title: "Eminem - Without you",
    img: "https://i1.sndcdn.com/avatars-000227103862-tfu8r3-t500x500.jpg",
    user: "user123",
    userPic:
      "https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    desc: "asd213xasdsadas ...",
    views: "3 млн. показвания",
    uploaded: "преди 3 години",
  },
  {
    title: "Random Video",
    img: "https://i.ytimg.com/vi/cQZqPi1aHNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMFTyaS7tRry3pHkCVxZt2LDgUgw",
    user: "user2222",
    userPic:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "G-Eazy - Random (Official Audio)",
    img: "https://i.ytimg.com/vi/oCNucnhn6fU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkfbkfcpf3KuRnosdIgHRoa0C2Eg",
    user: "G-Eazy",
    userPic:
      "https://yt3.ggpht.com/GDvg8-AlnhdsRKFVWFjPSMvSmFht-hQknhgByLaIw4z6n8YYzHZaPi48f2-dlG42kOSCbDljBFk=s88-c-k-c0x00ffffff-no-rj",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "LoL Gameplay",
    img: "https://cdn.europosters.eu/image/1300/posters/league-of-legends-champions-i102252.jpg",
    user: "Riot Games",
    userPic:
      "https://cdn.vox-cdn.com/thumbor/qcB2PjDbMcV3TtOGTdPNOwdwzpQ=/0x0:7200x3066/1200x800/filters:focal(2642x724:3794x1876)/cdn.vox-cdn.com/uploads/chorus_image/image/70352203/ARCANE_S1_00030.0.jpg",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "500 хил, показвания",
    uploaded: "преди 1 година",
  },
  {
    title: "Eminem - Without you",
    img: "https://i1.sndcdn.com/avatars-000227103862-tfu8r3-t500x500.jpg",
    user: "user123",
    userPic:
      "https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    desc: "asd213xasdsadas ...",
    views: "3 млн. показвания",
    uploaded: "преди 3 години",
  },
  {
    title: "Random Video",
    img: "https://i.ytimg.com/vi/cQZqPi1aHNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMFTyaS7tRry3pHkCVxZt2LDgUgw",
    user: "user2222",
    userPic:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "G-Eazy - Random (Official Audio)",
    img: "https://i.ytimg.com/vi/oCNucnhn6fU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkfbkfcpf3KuRnosdIgHRoa0C2Eg",
    user: "G-Eazy",
    userPic:
      "https://yt3.ggpht.com/GDvg8-AlnhdsRKFVWFjPSMvSmFht-hQknhgByLaIw4z6n8YYzHZaPi48f2-dlG42kOSCbDljBFk=s88-c-k-c0x00ffffff-no-rj",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "LoL Gameplay",
    img: "https://cdn.europosters.eu/image/1300/posters/league-of-legends-champions-i102252.jpg",
    user: "Riot Games",
    userPic:
      "https://cdn.vox-cdn.com/thumbor/qcB2PjDbMcV3TtOGTdPNOwdwzpQ=/0x0:7200x3066/1200x800/filters:focal(2642x724:3794x1876)/cdn.vox-cdn.com/uploads/chorus_image/image/70352203/ARCANE_S1_00030.0.jpg",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "500 хил, показвания",
    uploaded: "преди 1 година",
  },
  {
    title: "Eminem - Without you",
    img: "https://i1.sndcdn.com/avatars-000227103862-tfu8r3-t500x500.jpg",
    user: "user123",
    userPic:
      "https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    desc: "asd213xasdsadas ...",
    views: "3 млн. показвания",
    uploaded: "преди 3 години",
  },
  {
    title: "Random Video",
    img: "https://i.ytimg.com/vi/cQZqPi1aHNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMFTyaS7tRry3pHkCVxZt2LDgUgw",
    user: "user2222",
    userPic:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "G-Eazy - Random (Official Audio)",
    img: "https://i.ytimg.com/vi/oCNucnhn6fU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkfbkfcpf3KuRnosdIgHRoa0C2Eg",
    user: "G-Eazy",
    userPic:
      "https://yt3.ggpht.com/GDvg8-AlnhdsRKFVWFjPSMvSmFht-hQknhgByLaIw4z6n8YYzHZaPi48f2-dlG42kOSCbDljBFk=s88-c-k-c0x00ffffff-no-rj",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
  {
    title: "LoL Gameplay",
    img: "https://cdn.europosters.eu/image/1300/posters/league-of-legends-champions-i102252.jpg",
    user: "Riot Games",
    userPic:
      "https://cdn.vox-cdn.com/thumbor/qcB2PjDbMcV3TtOGTdPNOwdwzpQ=/0x0:7200x3066/1200x800/filters:focal(2642x724:3794x1876)/cdn.vox-cdn.com/uploads/chorus_image/image/70352203/ARCANE_S1_00030.0.jpg",
    desc: "I decided to change my mind on the recharge dice. It is actually one of the most OP dice in the game atm. I will make a video on it ...",
    views: "500 хил, показвания",
    uploaded: "преди 1 година",
  },
  {
    title: "Eminem - Without you",
    img: "https://i1.sndcdn.com/avatars-000227103862-tfu8r3-t500x500.jpg",
    user: "user123",
    userPic:
      "https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    desc: "asd213xasdsadas ...",
    views: "3 млн. показвания",
    uploaded: "преди 3 години",
  },
  {
    title: "Random Video",
    img: "https://i.ytimg.com/vi/cQZqPi1aHNo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMFTyaS7tRry3pHkCVxZt2LDgUgw",
    user: "user2222",
    userPic:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    views: "34 млн. показвания",
    uploaded: "преди 6 години",
  },
];

const testWatch = {
  videoSrc: "https://www.youtube.com/embed/lheapd7bgLA",
  title: "What Happens if the Moon Crashes into Earth?",
  views: "500 хил. показвания",
  timestamp: "6.07.2021 г.",
  likes: "1,5 ХИЛ.",
  channelImg:
    "https://yt3.ggpht.com/ytc/AKedOLQO2-DfuqwtPYTqBcZ8rEWt8g4p1sB_LyddKS5msQ=s68-c-k-c0x00ffffff-no-rj",
  channel: "Kurzgesagt",
  subscribers: "4,65 хил. абонати",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, omnis. Fugiat sit modi dolore! Beatae repellat dicta optio mollitia praesentium itaque aliquid obcaecati magnam suscipit neque a fugit, facilis quaerat!Impedit omnis tempora, temporibus fuga, totam voluptatum sequi saepe perferendis eius laboriosam itaque delectus veritatis incidunt sit nam culpa at. Perspiciatis excepturi voluptate doloribus alias ex amet voluptas tempore. Totam.Praesentium possimus earum dolore eligendi quo cupiditate sequi commodi, ipsum vero aut, nam suscipit unde error consequatur iste natus autem. Accusantium, doloremque? Provident, amet at blanditiis fuga voluptatem quaerat modi?",
};

const testComments = [
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zG4BMkIPOeyvqjCdgtSTpIu8A3NL_iwgNVjnDKAHrhlin1GixR4IR8VafhVUoop-G-8&usqp=CAU",
    user: "Haralampi Iliew",
    timestamp: "преди 1 месец",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis facilis quae animi harum, consequatur repellendus eligendi.",
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zG4BMkIPOeyvqjCdgtSTpIu8A3NL_iwgNVjnDKAHrhlin1GixR4IR8VafhVUoop-G-8&usqp=CAU",
    user: "Haralampi Iliew",
    timestamp: "преди 1 месец",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis facilis quae animi harum, consequatur repellendus eligendi.",
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zG4BMkIPOeyvqjCdgtSTpIu8A3NL_iwgNVjnDKAHrhlin1GixR4IR8VafhVUoop-G-8&usqp=CAU",
    user: "Haralampi Iliew",
    timestamp: "преди 1 месец",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis facilis quae animi harum, consequatur repellendus eligendi.",
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zG4BMkIPOeyvqjCdgtSTpIu8A3NL_iwgNVjnDKAHrhlin1GixR4IR8VafhVUoop-G-8&usqp=CAU",
    user: "Haralampi Iliew",
    timestamp: "преди 1 месец",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis facilis quae animi harum, consequatur repellendus eligendi.",
  },
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zG4BMkIPOeyvqjCdgtSTpIu8A3NL_iwgNVjnDKAHrhlin1GixR4IR8VafhVUoop-G-8&usqp=CAU",
    user: "Haralampi Iliew",
    timestamp: "преди 1 месец",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis facilis quae animi harum, consequatur repellendus eligendi.",
  },
];

export { categories, homeVideos, testSearch, testWatch, testComments };
