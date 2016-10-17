import React from 'react';
import { connect } from "react-redux"
import { fetchNews ,addNews} from "../../actions/newsActions"

@connect((store) => {
    return {
        news: store.news.news,
        newsFetched: store.news.fetched,
    };
})
//新闻动态
class NewsCard extends React.Component {
    constructor(prop) {
        super(prop);
    }
    componentWillMount() {
        this.props.dispatch(fetchNews())
    }
    render() {
        const {news} = this.props;
        console.log(news);
        debugger
        return (
            <div className="line news">
                <div className='div-title'>
                </div>
                  <NewsList list={news}/> 
            </div>
        )
    }
}

class NewsList extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        var createNewsList = (item, index) => {
            var className = 'list';
            var time = new Date(parseInt(item.time)).toLocaleDateString();
            var list = this.props.list;
            return (
                <li className={className} key={item.key}>
                    <span className='news-time'>{time}</span>
                    <a href='/news/article' target='view' className='news-title'>{item.title}</a>
                </li>
            )
        }
        return (
            <div className='editor'>
                <ol>
                    {this.props.list.map(createNewsList)}
                </ol>
            </div>
        )
    }
}

module.exports = NewsCard;