export default function reducer(
    state = {
        products:[],
    }, action) {
    console.log('action.type: ', action);
    switch (action.type) {
        case "FETCH_PRODUCTS": {
            return { ...state, products: action.payload.data }
        }
        // case "ADD_PRODUCT": {
        //     return { ...state, fetching: false, error: action.payload }
        // }
        // case "UPDATE_PRODUCT": {
        //     return {
        //         ...state,
        //         fetching: false,
        //         fetched: true,
        //         user: action.payload,
        //     }
        // }
        // case "DEL_PRODUCT": {
        //     return {
        //         ...state,
        //         user: { ...state.user, name: action.payload }
        //     }
        // }
        default: {
            return state;
        }
    }
    return state
}