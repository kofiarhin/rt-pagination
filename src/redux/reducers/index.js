import { combineReducers } from "redux";
import dataReducer from "./data/data.reducer";

const rootReducer = combineReducers({
  dataReducer,
});
export default rootReducer;
