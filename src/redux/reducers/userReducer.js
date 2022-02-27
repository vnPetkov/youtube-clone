const INITIAL_STATE = {
  logged: false,
  uid: "",
  name: "",
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
        name: action.userName,
        profileImg: action.image,
        historyVideos: action.history,
        likedVideos: action.liked,
        dislikedVideos: action.disliked,
        uploadedVideos: action.uploaded,
      };
    case "LOGOUT":
      return {
        ...state,
        logged: false,
        uid: "",
        name: "",
        profileImg: "",
        historyVideos: [],
        likedVideos: [],
        dislikedVideos: [],
        uploadedVideos: [],
      };

    ////////////////////////PROFILE DATA///////////////////////////////
    case "CHANGE_PIC":
      return {
        ...state,
        profileImg: action.newPic,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.newName,
      };

    /////////////////////USER ACTIVITY DATA///////////////////////////
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
