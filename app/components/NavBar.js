import React from 'react';
import Static from '../Static/Static';
import Util from '../Util/Util';

const product = Static.Product;
/** 
 * 顶部导航
 */
const NavBar = () =>
    <div className="navbar navbar-dark navbar-fixed-top" role="navigation" id="menu-nav">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">切换导航</span>
                    <span className="icon-bar" style={{ backgroundColor: '#000' }}></span>
                    <span className="icon-bar" style={{ backgroundColor: '#000' }}></span>
                    <span className="icon-bar" style={{ backgroundColor: '#000' }}></span>
                </button>
                <a className="navbar-brand" href="#">信希艾科技发展有限公司</a>
            </div>
            <NavBarItems />
        </div>
    </div>

const NavBarItems = () =>
    <div className="navbar-collapse collapse navbar-right">
        <ul className="nav navbar-nav ">
            <li className='nav-link'><a href="/">首页</a></li>
            <li className='nav-link'><a href="http://iot.xinxiai.cn">关于我们</a></li>
            <li className="dropdown1 nav-link" >
                <a href="#" className='dropdown-toggle' data-toggle='dropdown'>产品 <span className='caret'></span></a>
                <ul className='dropdown-menu dropdown-menu1' role='menu'>
                    {
                        product.map((item, index) =>
                            <li key={'product_' + index}>
                                <a href={'/product/' + item.href}>{item.name}</a>
                            </li>
                        )
                    }
                </ul>
            </li>
            <li className='nav-link'><a href="/case">案例</a></li>
            <li className='nav-link'><a href="/news">新闻</a></li>
            <li className='nav-link'><a href="#" data-toggle="modal" data-target="#aboutModal">关于</a></li>
        </ul>
    </div>

export default NavBar;
