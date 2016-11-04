import axios from "axios";

export function fetchUser() {
    return {
        type: "FETCH_USER_FULFILLED",
        payload: {
            name: "Qiao",
            age: 23,
        }
    }
}

export function setUserName(name) {
    return {
        type: 'SET_USER_NAME',
        payload: name,
    }
}

export function setUserAge(age) {
    return {
        type: 'SET_USER_AGE',
        payload: age,
    }
}

// export function logout() {
//     return function (dispatch) {
//         axios.post('/logout')
//             .then((response) => {
//                 dispatch({ type: 'LOGOUT', payload: response })
//             })
//             .catch((err) => {
//                 dispatch({ type: 'LOGOUT', payload: err })
//             })
//     }
// }