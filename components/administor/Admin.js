import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
//产品1
class Admin extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div>
                <NavBar />
                <section>
                    <div className='container admin-page'>
                        <center>
                            <h2>系统管理</h2>
                            <hr />
                            <div className='row'>
                                <div className='col-md-2'></div>
                                <div className='col-md-8 normal-area'>
                                    <button className='btn btn-primary' type='button'><a href='/admin/news'>新闻管理</a></button>
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

module.exports = Admin;