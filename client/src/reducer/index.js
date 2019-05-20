import { combineReducers } from "redux";
import alert from "./alert.js"
import authReducer from "./authReducer.js";
import profileReducer from "./profileReducer.js";


export default combineReducers({
  alert:alert,
  auth: authReducer,
  profile: profileReducer,
 
});