import React from 'react';
import AdminModal from './modal/AdminModal'
import AboutModal from './modal/AboutModal';
//新闻动态
class Footer extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = { login: false }
    }
    componentWillMount() {
        const user = sessionStorage.getItem('__user__');
        if (user) {
            this.setState({ login: true })
        } else {
            this.setState({ login: false })
        }
    }
    render() {
        const data = this.props.data
        let login = this.state.login
        let _dom
        if (login) {
            _dom = <li><a href="/admin" >管理员操作</a></li>
        } else {
            _dom = <li><a href="#" data-toggle="modal" data-target="#signinModal">管理员操作</a></li>
        }
        return (
            <section>
                <div className='footer clear'>
                    <div className='footer-wrapper'>
                        <div className='link'>
                            <ul className='about'>
                                <li><span>关于我们</span></li>
                                <li><a href="/about">公司介绍</a></li>
                                <li><a href="/contact">联系我们</a></li>
                                <li><a href="/disclaimer">免责声明</a></li>
                                <li><a href="/joinus">加入我们</a></li>
                            </ul>
                            <ul className="support">
                                <li><span>帮助与支持</span></li>
                                <li><a href="/support">支持中心</a></li>
                                <li><a href="/questions">常见问题</a></li>
                                {_dom}
                            </ul>
                            <ul className="partners">
                                <li><span>互动关注</span></li>
                                <li><a href="#" >官方微博</a></li>
                                <li><a id="btn_offices_wx" href="javascript:;">官方微信</a></li>
                                <li><a href="#" >官方邮箱</a></li>
                            </ul>
                        </div>
                        <div className="copyright top-line">
                            <p>© 2016-2017  北京信希艾科技发展有限公司</p>
                        </div>
                    </div>
                </div>
                <AdminModal />
                <AboutModal />
            </section>
        )
    }
}

module.exports = Footer;