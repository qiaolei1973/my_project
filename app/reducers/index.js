import {combineReducers} from "redux";

import tweets from "./tweetsReducer";
import user from "./userReducer";
import news from "./newsReducer";
import product from "./productReducer";

export default combineReducers({
    tweets,
    user,
    news,
    product,
})