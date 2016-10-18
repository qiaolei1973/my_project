import React from 'react';
/** 
 * 顶部导航
 */
class NavBar extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div className="navbar navbar-dark navbar-fixed-top" role="navigation" id="menu-nav">
                <div className="container">
                    <collapseButton />
                    <NavBarHeader />
                    <NavBarItems />
                </div>
            </div>
        )
    }
}

class NavBarHeader extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div className="navbar-header">
                <collapseButton />
                <a className="navbar-brand" href="/">首页</a>
            </div>
        )
    }
}

// class NavBarItemss extends React.Component {
//     constructor(prop) {
//         super(prop);
//     }
//     render() {
//         return (
//             <div className="navbar-collapse collapse">
//                 <ul className="nav navbar-nav">
//                     <li className='nav-link'><a href="#ad-carousel">综述</a></li>
//                     <li className='nav-link'><a href="#summary-container">简述</a></li>
//                     <li className="dropdown nav-link">
//                         <a href="#" className="dropdown-toggle" data-toggle="dropdown">产品 <span className="caret"></span></a>
//                         <ul className="dropdown-menu" role="menu">
//                             <li><a className='nav-link' href="product1">公司介绍</a></li>
//                             <li><a href="product2">产品2</a></li>
//                         </ul>
//                     </li>
//                     <li className='nav-link'><a href="#" data-toggle="modal" data-target="#about-modal">关于</a></li>
//                 </ul>
//             </div>
//         )
//     }
// }


class NavBarItems extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {  _class: 'hidden dropdown-menu' };
        this.mouseOver = () => {
            this.setState({ _class: '_show dropdown-menu' });
        };

        this.mouseOut = () => {
            this.setState({ _class: '_hidden dropdown-menu' });
        };
    }
    render() {
        var _class = this.state._class;
        return (
            <div className="navbar-right">
                <ul className="nav navbar-nav ">
                    <li className='nav-link'><a href="#ad-carousel">综述</a></li>
                    <li className="dropdown nav-link" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                        <a href="#" >产品 </a>
                        <ul className={_class}>
                            <li><a href="product1">产品1</a></li>
                            <li><a href="product2">产品2</a></li>
                        </ul>
                    </li>
                    <li className='nav-link'><a href="news">新闻</a></li>
                    <li className='nav-link'><a href="#" data-toggle="modal" data-target="#about-modal">关于</a></li>
                </ul>
            </div>
        )
    }
}


class collapseButton extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">切换导航</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>)
    }
}

module.exports = NavBar;
