const INITIAL_STATE = {
  commentsArr: [],
};
export const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        commentsArr: [...action.newCommentsArr],
      };
    case "ADD_VIDEO_COMMENTS":
      return {
        ...state,
        commentsArr: [...state.commentsArr, action.newVideoComments],
      };
    case "CLEAR_COMMENTS":
      return {
        ...state,
        commentsArr: [],
      };
    default:
      return state;
  }
};
