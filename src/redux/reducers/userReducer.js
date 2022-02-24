let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

const INITIAL_STATE = user
  ? {}
  : {
      logged: false,
      uid: "",
      profileImg: "",
      historyVideos: [],
      likedVideos: [],
      dislikedVideos: [],
      uploadedVideos: [],
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
        uploadedVideos: action.uploaded,
      };
    case "LOGOUT":
      return {
        logged: false,
        uid: "",
        profileImg: "",
        historyVideos: [],
        likedVideos: [],
        dislikedVideos: [],
        uploadedVideos: [],
      };

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
    case "CHANGE_UPLOADED":
      return {
        ...state,
        uploadedVideos: [...state.uploadedVideos, action.video],
      };

    default:
      return state;
  }
};
