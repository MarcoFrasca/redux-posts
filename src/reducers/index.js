import { combineReducers } from "redux";
import postReducer from "./postReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  postReducer: postReducer,
  uiReducer: uiReducer
});
