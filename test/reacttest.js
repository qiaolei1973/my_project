import React from 'react';
/** 
 * 顶部导航
 */

class TestCmp extends React.Component {
  render() {
    return (
     <div id="ad-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#ad-carousel" data-slide-to="0" className="active"></li>

        </ol>
        <Inner/>
    </div>
    );
  }
}

//展示图文组件的div
class Inner extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        var createItem = function (item) {
            return (
                <div className="item" key={item.key}>
                    <img src="images/chrome-big.jpg" alt="1 slide"/>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Chrome</h1>

                            <p>Google Chrome，又称Google浏览器，是一个由Google（谷歌）公司开发的网页浏览器。</p>

                            <p><a className="btn btn-lg btn-primary" href="http://www.google.cn/intl/zh-CN/chrome/browser/" role="button"
                                target="_blank">点我下载</a></p>
                        </div>
                    </div>
                </div>
            )
        }
        return (
           <div className="carousel-inner">
            <div className="item active">
                <img src="images/chrome-big.jpg" alt="1 slide"/>

                <div className="container">
                    <div className="carousel-caption">
                        <h1>Chrome</h1>

                        <p>Google Chrome，又称Google浏览器，是一个由Google（谷歌）公司开发的网页浏览器。</p>

                        <p><a className="btn btn-lg btn-primary" href="http://www.google.cn/intl/zh-CN/chrome/browser/" role="button"
                                target="_blank">点我下载</a></p>
                    </div>
                </div>
            </div>
           
        <a className="left carousel-control" href="#ad-carousel" data-slide="prev"><span
            className="glyphicon glyphicon-chevron-left"></span></a>
        <a className="right carousel-control" href="#ad-carousel" data-slide="next"><span
            className="glyphicon glyphicon-chevron-right"></span></a>
    </div>
        )
    }
}

exports.Cmp = TestCmp;