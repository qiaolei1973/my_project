import Line from '../Line';
import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer';
import NewsList from './NewsList';
import NewsModal from '../modal/NewsModal';
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
                <NewsModal type={'modify'}/>
                <NewsModal type={'add'}/>
                <input type='button' className='button  news-add' value='添加' data-toggle="modal"  data-target="#newsAddModal"/>
                </section>
                <Footer />
            </div>
        )
    }
}

module.exports = NewsPage;