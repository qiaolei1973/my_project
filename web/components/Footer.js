import React from 'react';
import Login from './login/Login'
//新闻动态
class Footer extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <section>
                <div className='footer clear' style={{background:'yellow'}}>
                    <div className='footer-wrapper'>
                        <div className='link'>
                            <ul className='about'>
                                <li><span>关于我们</span></li>
                                <li><a href="about.html">公司介绍</a></li>
                                <li><a href="policy.html">隐私条款</a></li>
                                <li><a href="disclaimer.html">免责声明</a></li>
                                <li><a href="joinus.html">加入我们</a></li>
                                <li><a href="../indulged/">防沉迷，家长监护</a></li>
                            </ul>
                            <ul className="support">
                                <li><span>帮助与支持</span></li>
                                <li><a href="support.html">支持中心</a></li>
                                <li><a href="faq-home.html">常见问题</a></li>
                                <li><a href="#" data-toggle="modal" data-target="#signinModal">管理员登陆</a></li>
                            </ul>
                            <ul className="partners">
                                <li><span>互动关注</span></li>
                                <li><a href="http://weibo.com/91pandadesk" target="_blank">官方微博</a></li>
                                <li><a id="btn_offices_wx" href="javascript:;">官方微信</a></li>
                                <li><a href="mailto: 91launcher@felink.com" target="_blank">官方邮箱</a></li>
                            </ul>
                        </div>
                        <div className="copyright top-line">
                            <p>© 2015-2016  福建风灵创景科技有限公司Felink.com 版权所有 闽ICP备15026663号-1 客服热线 0591-38129191</p>
                        </div>
                    </div>
                </div>
                <Login/>


            </section>
        )
    }
}

module.exports = Footer;