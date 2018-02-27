import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { connect } from "react-redux"
import { logout } from "../../actions/userActions"
import { BACK } from '../../../config/api';
import axios from "axios"

// @connect((store) => {
//     return {
//         news: store.news.news,
//         newsFetched: store.news.fetched,
//     };
// })
//管理员界面
class Admin extends React.Component {
    constructor(prop) {
        super(prop);
        this.logout = () => {
            axios.post(`${BACK}/logout`)
                .then((response) => {
                    if (response.data.status === 0) {
                        sessionStorage.removeItem('__user__');
                        window.location.href = '/'
                    } else {
                        alert('service err')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
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
                                    <button className='btn btn-primary' type='button'><a href='/admin/products'>产品编辑</a></button>
                                </div>
                                <div className='col-md-2'>
                                    <button className='btn btn-default' onClick={this.logout} type='button'>退出登录</button>
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