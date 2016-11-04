import React from 'react';
import Static from '../../Static/Static';
import Util from '../../Util/Util';
import NavBar from '../NavBar';
import Footer from '../Footer';
import NewsCard from './NewsCard';
import { connect } from "react-redux"
import { getNews } from "../../actions/newsActions"
import NewsModal from '../modal/NewsModal';

@connect((store) => {
    return {
        news: store.news.news
    }
})
//新闻详情页
class NewsPage extends React.Component {
    constructor(prop) {
        super(prop);
    }
    componentWillMount() {
        const {id} = this.props.params;
        this.props.dispatch(getNews(id))
    }
    render() {
        const {news} = this.props
        if (!news || news instanceof Array) {
            return (<div></div>)
        }
        const time = Util.getDate(news.meta.updateAt)
        return (
            <div>
                <NavBar />
                <section>
                    <div className='container'>
                        <center>
                            <h2>{news.title}</h2>
                            <hr />
                            <div className='row'>
                                <div className='col-md-2'></div>
                                <div className='col-md-8 normal-area'>
                                    {news.article}
                                    <span className='news-time'>{time}</span>
                                </div>
                            </div>
                        </center>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = NewsPage;