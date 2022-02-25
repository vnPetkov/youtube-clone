// import { useEffect } from "react";

// let loggedUser = localStorage.getItem("user");
// useEffect(() => {
//   if(localStorage.getItem("user")){
//     const user = await signInWithEmailAndPassword(
//       auth,
//       loginEmail,
//       loginPassword
//     );
//   }
// })

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
