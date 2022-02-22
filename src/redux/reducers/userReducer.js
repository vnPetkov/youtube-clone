const INITIAL_STATE = {
  logged: false,
  uid: "",
  profileImg: "",
  historyVideos: [],
  likedVideos: [],
  dislikedVideos: [],
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
        dislikedVideos: action.disliked,
      };
    case "LOGOUT":
      return { ...state };

    ////////////////////////////////////////////////

    case "HISTORIZE":
      return {
        ...state,
        historyVideos: [...state.historyVideos, action.videoId],
      };
    case "CHANGE_LIKED":
      return {
        ...state,
        likedVideos: [...action.newLikedArr],
      };
    case "CHANGE_DISLIKED":
      return {
        ...state,
        dislikedVideos: [...action.newDislikedArr],
      };

    default:
      return state;
  }
};
