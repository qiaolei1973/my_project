import axios from "axios";
import Static from '../Static/Static';
import Util from '../Util/Util'
import Observer from "../Util/Observer"
export function fetchNews() {
    return function (dispatch) {
        axios.post("/news/fetchNews")
            .then((response) => {
                const payload = response.data.length ? response.data : Static.News.items
                dispatch({ type: "FETCH_NEWS_FULFILLED", payload: payload })
                Util.setCache('news',payload)
            })
            .catch((err) => {
                const payload =  Static.News.items
                dispatch({ type: "FETCH_NEWS_REJECTED", payload: err })
            //    dispatch({ type: "FETCH_NEWS_FULFILLED", payload: payload })
            //    Util.setCache('news',payload)
            })
    }
}

export function getNews(id) {
    const news = Util.getCache('news','_id',id)
    return {
        type:"GET_NEWS",
        payload:news       
    }
}

export function addNews(news) {
    return function (dispatch) {
        axios.post("/news/addNews",news)
            .then((response) => {
                const payload = response.data
                dispatch({ type: "ADD_NEWS_FULFILLED", payload: payload })
                Observer.fire('newsChange')
            })
            .catch((err) => {
               dispatch({ type: "ADD_NEWS_REJECTED", payload: err })
            })
    }
}

export function updateNews(news) {
    return function (dispatch) {
        axios.post("/news/updateNews",news)
            .then((response) => {
                const payload = response.data
                dispatch({ type: "UPDATE_NEWS_FULFILLED", payload: payload })
                Observer.fire('newsChange')

            })
            .catch((err) => {
               dispatch({ type: "UPDATE_NEWS_REJECTED", payload: err })
            })
    }
}

export function delNews(_id) {
    return function (dispatch) {
        axios.post("/news/delNews",{_id:_id})
            .then((response) => {
                const payload = response.data
                dispatch({ type: "DEL_NEWS_FULFILLED", payload: payload })
                Observer.fire('newsChange')

            })
            .catch((err) => {
               dispatch({ type: "DEL_NEWS_REJECTED", payload: err })
            })
    }
}

export function setCurrentNews(news) {
    return {
        type:"SET_CURRENT_NEWS",
        payload:news
    }
}
