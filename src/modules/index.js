import { combineReducers } from "redux";
import counter from "./counter";
import Todos from "./Todos";

const rootReducer = combineReducers({
  counter,
  Todos,
});

export default rootReducer;
