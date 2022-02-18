import { createStore } from "redux";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer.js";

const rootReducer = combineReducers({
  userData: userReducer,
});

const store = createStore(rootReducer);

export default store;
