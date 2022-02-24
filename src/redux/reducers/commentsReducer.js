let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

const INITIAL_STATE = {
  commentsArr: [],
};

export const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      console.log("ADD_COMMENT");

      return {
        ...state,
        commentsArr: [...action.newCommentsArr], //TODO: da vidq dali nqma da stane bez destructuring
      };

    case "ADD_VIDEO_COMMENTS":
      return {
        ...state,
        commentsArr: [...state.commentsArr, action.newVideoComments],
      };

    default:
      return state;
  }
};
