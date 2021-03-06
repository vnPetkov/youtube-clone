const INITIAL_STATE = {
  showHeader: true,
};
export const navsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_OPENED":
      return {
        ...state,
        showHeader: false,
      };
    case "LOGIN_CLOSED":
      return {
        ...state,
        showHeader: true,
      };
    default:
      return state;
  }
};
