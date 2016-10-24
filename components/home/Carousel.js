import React from 'react';

//轮换广告效果
class Carousel extends React.Component {
    constructor(prop) {
        super(prop);
        /**
      * 生成全局唯一的guid标识符
      */
        this.getGuid = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
            this.items = [{
                key: this.getGuid(),
                imgPath: "images/chrome-big.jpg",
                alt: '1',
                title: 'Chrome',
                text: 'Google Chrome，又称Google浏览器，是一个由Google（谷歌）公司开发的网页浏览器。'
            }, {
                    key: this.getGuid(),
                    imgPath: "images/firefox-big.jpg",
                    alt: '2',
                    title: 'Firefox',
                    text: 'Mozilla Firefox，中文名通常称为“火狐”或“火狐浏览器”，是一个开源网页浏览器。'
                }, {
                    key: this.getGuid(),
                    imgPath: "images/safari-big.jpg",
                    alt: '3',
                    title: 'Firefox',
                    text: 'Mozilla Firefox，中文名通常称为“火狐”或“火狐浏览器”，是一个开源网页浏览器。'
                }, {
                    key: this.getGuid(),
                    imgPath: "images/opera-big.jpg",
                    alt: '4',
                    title: 'Firefox',
                    text: 'Mozilla Firefox，中文名通常称为“火狐”或“火狐浏览器”，是一个开源网页浏览器。'
                }, {
                    key: this.getGuid(),
                    imgPath: "images/ie-big.jpg",
                    alt: '5',
                    title: 'Firefox',
                    text: 'Mozilla Firefox，中文名通常称为“火狐”或“火狐浏览器”，是一个开源网页浏览器。'
                }
            ];
    }
    render() {
        return (
            <div id="ad-carousel" className="carousel slide" data-ride="carousel">
                <Indicators/>
                <Inner items={this.items}/>
                <a className="left carousel-control" href="#ad-carousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"/>
                </a>
                <a className="right carousel-control" href="#ad-carousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"/>
                </a>
            </div>
        )
    }
}

//下方小圆点
class Indicators extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <ol className="carousel-indicators">
                <li data-target="#ad-carousel" data-slide-to="5" className="active"></li>
                <li data-target="#ad-carousel" data-slide-to="4" className=""></li>
                <li data-target="#ad-carousel" data-slide-to="3" className=""></li>
                <li data-target="#ad-carousel" data-slide-to="4" className=""></li>
                <li data-target="#ad-carousel" data-slide-to="6" className=""></li>
            </ol>
        )
    }
}

//幻灯片控制按钮


//展示图文组件的div
class Inner extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        var createItem = function (item, index) {
            var className = 'item';
            if (index === 0) {
                className += ' active';
            }
            return (
                <div className={className} key={item.key}>
                    <img src={item.imgPath} alt={item.alt}/>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>{item.title}</h1>

                            <p>{item.text}</p>

                            <p><a className="btn btn-lg btn-primary" href="http://www.google.cn/intl/zh-CN/chrome/browser/" role="button"
                                target="_blank">点我下载</a></p>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="carousel-inner">
                {this.props.items.map(createItem) }
            </div>
        )
    }
}

module.exports = Carousel;