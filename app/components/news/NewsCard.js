import React from 'react';
import Static from '../../Static/Static';
import Util from '../../Util/Util'
import { connect } from "react-redux"
import { fetchNews, addNews } from "../../actions/newsActions"

@connect((store) => {
    return {
        news: store.news.news,
        newsFetched: store.news.fetched,
    }
})
//新闻动态
class NewsCard extends React.Component {
    constructor(prop) {
        super(prop)
    }
    componentWillMount() {
        this.props.dispatch(fetchNews())
        Util.setCache('news', this.props.news)
    }
    render() {
        let {news} = this.props;
        //sessionStorage.setItem('news',JSON.stringify(news));
        return (
            <div className="line news">
                <div className='div-title'>
                </div>
                <NewsList list={news} />
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
            const className = 'list'
            const _time = new Date(item.meta.updateAt)
            const time = Util.getDate(_time);
            const list = this.props.list
            const id = item._id
            const key = Util.getGuid()
            const href = '/news/' + id
            return (
                <li className={className} key={item.key}>
                    <span className='news-time'>{time}</span>
                    <a href={href} className='news-title'>{item.title}</a>
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