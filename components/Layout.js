import React from "react"
import {connect} from "react-redux"
import {fetchUser } from "../actions/userActions"
import {fetchTweets , addTweet} from "../actions/tweetsActions"

@connect((store) => {
    return {
         user: store.user.user,
        //userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    fetchTweets(){
        this.props.dispatch(fetchTweets())
        //this.props.dispatch(addTweet(123,"hahaha"))
    }
    render() {
       const {user,tweets} = this.props;
       if(!tweets.length){
           return<button onClick={this.fetchTweets.bind(this)}>load tweets</button>
       }
       const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)
        return (<div>
        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>
        </div>)
    }
}