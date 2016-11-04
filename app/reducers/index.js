import {combineReducers} from "redux";

import tweets from "./tweetsReducer";
import user from "./userReducer";
import news from "./newsReducer";

export default combineReducers({
    tweets,
    user,
    news,
})