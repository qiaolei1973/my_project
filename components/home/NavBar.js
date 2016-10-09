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
            <section>
                <div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="menu-nav">
                    <div className="container">
                        <collapseButton/>
                        <NavBarHeader/>
                        <NavBarItems/>
                    </div>
                </div>
            </section>
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
                <collapseButton/>
                <a className="navbar-brand" href="#">Title</a>
            </div>
        )
    }
}


class NavBarItems extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#ad-carousel">综述</a></li>
                    <li><a href="#summary-container">简述</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">特点 <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#feature-tab" data-tab="tab-chrome">Chrome</a></li>
                            <li><a href="#feature-tab" data-tab="tab-firefox">Firefox</a></li>
                            <li><a href="#feature-tab" data-tab="tab-safari">Safari</a></li>
                            <li><a href="#feature-tab" data-tab="tab-opera">Opera</a></li>
                            <li><a href="#feature-tab" data-tab="tab-ie">IE</a></li>
                        </ul>
                    </li>
                    <li><a href="#" data-toggle="modal" data-target="#about-modal">关于</a></li>
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
