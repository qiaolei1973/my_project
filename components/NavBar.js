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


class NavBarItems extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {  _class: 'hidden1 dropdown-menu1' };
        this.mouseOver = () => {
            this.setState({ _class: 'show1 dropdown-menu1' });
        };

        this.mouseOut = () => {
            this.setState({ _class: 'hidden1 dropdown-menu1' });
        };
    }
    render() {
        var _class = this.state._class;
        return (
            <div className="navbar-right">
                <ul className="nav navbar-nav ">
                    <li className='nav-link'><a href="#ad-carousel">综述</a></li>
                    <li className="dropdown1 nav-link" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                        <a href="#" >产品 </a>
                        <ul className={_class}>
                            <li><a href="/product1">产品1</a></li>
                            <li><a href="/product2">产品2</a></li>
                        </ul>
                    </li>
                    <li className='nav-link'><a href="/news">新闻</a></li>
                    <li className='nav-link'><a href="#" data-toggle="modal" data-target="#aboutModal">关于</a></li>
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
