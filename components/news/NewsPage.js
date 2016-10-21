import Line from '../Line';
import React from 'react';
import Static from '../../Static/Static';
import Util from '../../Util/Util';
import NavBar from '../NavBar';
import Footer from '../Footer';
import NewsCard from './NewsCard';
//产品1
class NewsPage extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const {id} = this.props.params;
        const data =JSON.parse(sessionStorage.getItem('news'));
        let news,time;
        for (var i = 0; i < data.length; i++) {
            if(data[i].id === id){
                news = data[i];
                time = Util.getDate(news.time);
                break
            }
        }
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