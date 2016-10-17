import axios from "axios";

export function fetchNews(){
    return function(dispatch){
        debugger
        axios.post("/news/fetchNews")
        .then((response) => {
            dispatch({type:"FETCH_NEWS_FULFILLED",payload:response.data})
        })
        .catch((err) => {
            dispatch({type:"FETCH_NEWS_REJECTED",payload:err})
        })
    }
}

export function addNews(){
    return{
        type:"ADD_NEWS",
        payload:{
        id: 1,
        title: 2,
        article: 3,
        time: 4,
        }
    }
}

export function updateNews(id,text){
    return{
        type:"UPDATE_NEWS",
        payload:{
            id,
            text,
        },
    }
}

export function deleteNews(id){
    return {
        type:"DELETE_NEWS",
        payload:id
    }
}
