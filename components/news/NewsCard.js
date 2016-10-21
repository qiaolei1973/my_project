import React from 'react';
import Static from '../../Static/Static';
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
        let {news} = this.props;
        if(!news.length){
            news = Static.News.items;
        }
        sessionStorage.setItem('news',JSON.stringify(news));
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
            const className = 'list';
            const time = new Date(parseInt(item.time)).toLocaleDateString();
            const list = this.props.list;
            const id = item.id;
            const href = '/news/' + id;
            return (
                <li className={className} key={item.key}>
                    <span className='news-time'>{time}</span>
                    <a href={href} target='view' className='news-title'>{item.title}</a>
                </li>
            )
        }
        return (
                <ol>
                    {this.props.list.map(createNewsList)}
                </ol>
        )
    }
}

module.exports = NewsCard;