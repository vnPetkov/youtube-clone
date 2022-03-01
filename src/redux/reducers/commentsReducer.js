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
      console.log("activated commentsReducer");
      return {
        ...state,
        commentsArr: [...state.commentsArr, action.newVideoComments],
      };

    case "CLEAR_COMMENTS":
      console.log("activated commentsReducer");
      return {
        ...state,
        commentsArr: [],
      };

    default:
      return state;
  }
};
