import React from 'react'
import Static from '../Static/Static'
import Util from '../Util/Util'
/** 
 * 顶部导航
 */
class NavBar extends React.Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <div className="navbar navbar-dark navbar-fixed-top" role="navigation" id="menu-nav">
                <div className="container">
                    <NavBarHeader />
                    <NavBarItems />
                </div>
            </div>
        )
    }
}

class NavBarHeader extends React.Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <div className="navbar-header">
                <CollapseButton />
                <a className="navbar-brand" href="#">信希艾科</a>
            </div>
        )
    }
}


class NavBarItems extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = { _class: 'hidden1 dropdown-menu1' };
        this.mouseOver = () => {
            this.setState({ _class: 'show1 dropdown-menu1' });
        };

        this.mouseOut = () => {
            this.setState({ _class: 'hidden1 dropdown-menu1' });
        };
    }
    render() {
        let _class = this.state._class
        const product = Static.Product
        const createProductList = (item) => {
            const href = '/product/' + item.href
            let key = Util.getGuid()
            return (
                <li ><a href={href}>{item.name}</a></li>
            )
        }
        return (
            <div className="navbar-collapse collapse navbar-right">
                <ul className="nav navbar-nav ">
                    <li className='nav-link'><a href="/">首页</a></li>
                    <li className="dropdown1 nav-link" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                        <a href="#" className='dropdown-toggle' data-toggle='dropdown'>产品 <span className='caret'></span></a>
                        <ul className='dropdown-menu dropdown-menu1' role='menu'>
                            {product.map(createProductList)}
                        </ul>
                    </li>
                    <li className='nav-link'><a href="/case">案例</a></li>
                    <li className='nav-link'><a href="/news">新闻</a></li>
                    <li className='nav-link'><a href="#" data-toggle="modal" data-target="#aboutModal">关于</a></li>
                </ul>
            </div>
        )
    }
}


class CollapseButton extends React.Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">切换导航</span>
                <span className="icon-bar" style={{backgroundColor:'#000'}}></span>
                <span className="icon-bar" style={{backgroundColor:'#000'}}></span>
                <span className="icon-bar" style={{backgroundColor:'#000'}}></span>
            </button>)
    }
}

module.exports = NavBar
