import Line from '../Line';
import React from 'react';
import Static from '../../Static/Static';
import NavBar from '../NavBar';
import Footer from '../Footer';
import NewsList from './NewsList';

//新闻页面
class NewsPage extends React.Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <div>
                <NavBar />
                    <NewsList />
                    <input
                        type='button' className='button  news-add' value='添加'
                        data-toggle="modal" data-target="#newsAddModal"
                        />
                <Footer />
            </div>
        )
    }
}

module.exports = NewsPage;