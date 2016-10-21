import React from 'react';
import AdminModal from './modal/AdminModal'
import AboutModal from './modal/AboutModal';
//新闻动态
class Footer extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <section>
                <div className='footer clear'>
                    <div className='footer-wrapper'>
                        <div className='link'>
                            <ul className='about'>
                                <li><span>关于我们</span></li>
                                <li><a href="/about">公司介绍</a></li>
                                <li><a href="/policy">隐私条款</a></li>
                                <li><a href="/disclaimer">免责声明</a></li>
                                <li><a href="/joinus">加入我们</a></li>
                            </ul>
                            <ul className="support">
                                <li><span>帮助与支持</span></li>
                                <li><a href="/support">支持中心</a></li>
                                <li><a href="/questions">常见问题</a></li>
                                <li><a href="#" data-toggle="modal" data-target="#signinModal">管理员操作</a></li>
                            </ul>
                            <ul className="partners">
                                <li><span>互动关注</span></li>
                                <li><a href="http://weibo.com/91pandadesk" target="_blank">官方微博</a></li>
                                <li><a id="btn_offices_wx" href="javascript:;">官方微信</a></li>
                                <li><a href="mailto: 91launcher@felink.com" target="_blank">官方邮箱</a></li>
                            </ul>
                        </div>
                        <div className="copyright top-line">
                            <p>© 2015-2016  xx有限公司</p>
                        </div>
                    </div>
                </div>
                <AdminModal/>
                 <AboutModal/>
            </section>
        )
    }
}

module.exports = Footer;