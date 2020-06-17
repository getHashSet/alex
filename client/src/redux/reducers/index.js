/////////////////////////////////////////
// Creat State to be used across the App
// Be sure <Provider></Provider>
// is around the Apps using this store.
/////////////////////////////////////////

import loggedReducer from "./isLoggedIn.js";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLoggedIn: loggedReducer,
});

export default allReducers;
