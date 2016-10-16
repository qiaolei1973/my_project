export default function reducer(
    state = {
        news: {
            id: null,
            title: null,
            article: null,
            time:null,
        },
        fetching: false,
        fetched: false,
        error: null,
    }, action) {
    switch (action.type) {
        case "FETCH_USER": {
            return Object.assign({}, state, { fetching: true })
        }
        case "FETCH_USER_REJECTED": {
            return Object.assign({}, state, { fetching: false, error: action.payload })
        }
        case "FETCH_USER_FULFILLED": {
            return Object.assign({}, state,
                {
                    fetching: false,
                    fetched: true,
                    news: action.payload,
                })
        }
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