import axios from "axios";
import Static from '../Static/Static';
import Util from '../Util/Util'
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
               // dispatch({ type: "FETCH_NEWS_REJECTED", payload: err })
               dispatch({ type: "FETCH_NEWS_FULFILLED", payload: payload })
               Util.setCache('news',payload)
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
                Util.setCache('news',payload)
            })
            .catch((err) => {
               dispatch({ type: "ADD_NEWS_REJECTED", payload: err })
            })
    }
}

export function updateNews(id, text) {
    return {
        type: "UPDATE_NEWS",
        payload: {
            id,
            text,
        },
    }
}

export function deleteNews(id) {
    return {
        type: "DELETE_NEWS",
        payload: id
    }
}

export function setCurrentNews(news) {
    return {
        type:"SET_CURRENT_NEWS",
        payload:news
    }
}
