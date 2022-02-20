import { combineReducers } from "redux";

import orderReducer from "./orderReducer";
import userInfoReducer from "./userInfoReducer";

export default combineReducers({
    orderReducer: orderReducer,
    userInfoReducer: userInfoReducer
});