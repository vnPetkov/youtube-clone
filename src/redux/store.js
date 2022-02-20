import { createStore } from "redux";
import { combineReducers } from "redux";
import { navsReducer } from "./reducers/navsReducer.js";
import { userReducer } from "./reducers/userReducer.js";

const rootReducer = combineReducers({
  userData: userReducer,
  navsDisplay: navsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
