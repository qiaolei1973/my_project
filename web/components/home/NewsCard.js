import React from 'react';
//新闻动态
class NewsCard extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <div className="col-md-4 news">
                <div className='div-title'>
                    <span>
                        <a href="news/" title={data.title_cn}>{data.title_cn}</a>
                    </span>
                    <b>{data.title_en}</b>
                </div>
                <NewsList list={data.items}/>
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
            return (
                <li className={className} key={item.key}>
                    <span className='news-time'>{time}</span>
                    <a href={item.link} target='view' className='news-title'>{item.title}</a>
                </li>
            )
        }
        return (
            <div className='editor'>
                <ol>
                    {this.props.list.map(createNewsList) }
                </ol>
            </div>
        )
    }
}

module.exports = NewsCard;