const INITIAL_STATE = {
  logged: false,
  uid: "",
  profileImg: "",
  likedVideos: [],
  historyVideos: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        logged: true,
        uid: action.profileUid,
        historyVideos: action.history,
        likedVideos: action.liked,
      };

    case "LOGOUT":
      return {
        ...state,
        logged: false,
        uid: "",
        profileImg: "",
        likedVideos: [],
        historyVideos: [],
      };

    case "LIKE":
      return {
        ...state,
        likedVideos: [...state.likedVideos, action.videoId],
      };

    case "HISTORIZE":
      return {
        ...state,
        historyVideos: [...state.historyVideos, action.videoId],
      };

    default:
      return state;
  }
};
