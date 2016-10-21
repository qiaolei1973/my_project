import Line from '../Line';
import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer';
import NewsList from './NewsList';
import NewsModifyModal from '../modal/NewsModifyModal';
//产品1
class NewsPage extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div>
                <NavBar />
                <section>
                <NewsList/>
                <NewsModifyModal/>
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = NewsPage;