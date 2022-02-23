let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

const INITIAL_STATE = {
  commentsArr: [],
};

export const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        commentsArr: [
          state.commentsArr[action.videoInd].comments.push(action.newComment),
        ], // TODO: със сигурност не работи, не ми стигна времето да го измисля
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
