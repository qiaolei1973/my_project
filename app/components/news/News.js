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
        return (
            <div>
                <NavBar />
                <section>
                    <NewsCard/>
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = News;