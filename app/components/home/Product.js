import React from 'react';

//产品介绍
class Product extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <div className="product">
                <hr className="feature-divider"/>
                <div className='div-title'>
                    <span>
                        <a href="product/" title={data.title_cn}>{data.title_cn}</a>
                    </span>
                    <b>{data.title_en}</b>
                </div>
                <NavTab items={data.items}/>
                <Content items={data.items}/>
            </div>
        )
    }
}

//产品介绍导航头
class NavTab extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        var createTabList = function (item, index) {
            const className = index === 0 ? 'active' : '';
            const link = '#' + item.link;
            return (
                <li className={className} key={item.key}><a href={link} role="tab" data-toggle="tab">{item.title}</a></li>
            )
        }
        return (
            <ul className="nav nav-tabs" role="tablist" id="feature-tab">
                {this.props.items.map(createTabList) }
            </ul>
        )
    }
}

//产品介绍内容体
class Content extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const createContent = (item, index) => {
            const className = index === 0 ? 'tab-pane active' : 'tab-pane';
            const link = '#' + item.link;
            return (
                <div className={className} id={item.link} key={item.key}>
                    <div className="row feature">
                        <div className="col-md-7">
                            <h2 className="feature-heading">{item.head} <span className="text-muted">{item.inc}</span></h2>
                            <p className="lead">{item.detail}
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img className="feature-image img-responsive" src={item.imgPath} alt={item.alt}/>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="tab-content">
                {this.props.items.map(createContent) }
            </div>
        )
    }
}

module.exports = Product;