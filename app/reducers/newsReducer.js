
export default function reducer(state = {
    news: [],
    currentNews: null,
    fetching: false,
    fetched: false,
    adding: false,
    added: false,
    updating: false,
    updated: false,
    deleting: false,
    deleted: false,
    error: null,
}, action) {
    switch (action.type) {
        //fetch
        case "FETCH_NEWS": {
            return Object.assign({}, state, { fetching: true, news: action.payload })
        }
        case "FETCH_NEWS_REJECTED": {
            return Object.assign({}, state, { fetching: false, error: action.payload })
        }
        case "FETCH_NEWS_FULFILLED": {
            return Object.assign({}, state,
                {
                    fetching: false,
                    fetched: true,
                    news: action.payload,
                })
        }

        //add
        case "ADD_NEWS": {
            return Object.assign({}, state, { adding: true });
        }
        case "ADD_NEWS_FULFILLED": {
            return Object.assign({}, state, { adding: false, added: true });
        }

        case "ADD_NEWS_REJECTED": {
            return Object.assign({}, state, { error: action.payload });
        }

        //update
        case "UPDATE_NEWS": {
            return Object.assign({}, state, { updating: true });
        }
        case "UPDATE_NEWS_FULFILLED": {
            return Object.assign({}, state, { updating: false, updated: true });
        }

        case "UPDATE_NEWS_REJECTED": {
            return Object.assign({}, state, { error: action.payload });
        }

        //delete
        case "DEL_NEWS": {
            return Object.assign({}, state, { deleting: true });
        }
        case "DEL_NEWS_FULFILLED": {
            return Object.assign({}, state, { deleting: false, deleted: true });
        }

        case "DEL_NEWS_REJECTED": {
            return Object.assign({}, state, { error: action.payload });
        }

        //
        case "GET_NEWS": {
            return Object.assign({}, state, { news: action.payload });
        }
        case "SET_CURRENT_NEWS": {
            return Object.assign({}, state, { currentNews: action.payload });
        }
        //     case "ADD_NEWS": {
        //     var a = 1; 
        //     return Object.assign({}, state, { news: action.payload })
        // }
        // case "SET_USER_NAME": {
        //     return {
        //         ...state,
        //         user: {...state.user, name: action.payload }
        //     }
        // }
        // case "SET_USER_AGE": {
        //     return {
        //          ...state,
        //         user: {...state.user, age: action.payload }
        //     }
        // }
    }
    return state
}