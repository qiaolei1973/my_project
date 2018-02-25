import axios from "axios";
import { BACK } from '../../config/api';

export function fetchProducts() {
    return function (dispatch) {
        axios.post(`${BACK}/product/fetchProducts`)
            .then((response) => {
                dispatch({ type: 'FETCH_PRODUCTS', payload: response })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function addProduct(params) {
    return function (dispatch) {
        axios.post(`${BACK}/product/addProduct`,params)
            .then((response) => {
                dispatch({ type: 'ADD_PRODUCT', payload: response })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function updateProduct(params) {
    return function (dispatch) {
        axios.post(`${BACK}/product/addProduct`,params)
            .then((response) => {
                dispatch({ type: 'UPDATE_PRODUCT', payload: response })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function delProduct(params) {
    return function (dispatch) {
        axios.post(`${BACK}/product/delProduct`)
            .then((response) => {
                dispatch({ type: 'DEL_PRODUCT', payload: response })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
