import Line from '../Line';
import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer';
import NewsCard from './NewsCard';
//产品1
class News extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = Static.Summary.NewsCard;
        return (
            <div>
                <NavBar />
                <section>
                    <NewsCard data={data}/>
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = News;