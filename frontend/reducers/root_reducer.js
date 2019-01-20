import { combineReducers } from "redux";
import todos from "./todos_reducer";
import steps from './steps_reducer';

export const rootReducer = combineReducers({
  todos,
  steps
});