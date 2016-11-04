import React from 'react';
//公司名片
class BusinessCard extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <div className="col-md-4 business">
                <div className='div-title'>
                    <span>
                        <a href="contact/" title={data.title_cn}>{data.title_cn}</a>
                    </span>
                    <b>{data.title_en}</b>
                </div>
                <div className='editor'>

                    <div className='card'>
                        <Detail items={data.items}/>
                    </div>
                </div>
            </div>
        )
    }
}

//公司名片内容
class Detail extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const createName = (item) => {
            return (
                <li key={item.key}>{item.name}</li>
            )
        }
        const createDetail = (item) => {
            return (
                <li key={item.key}>{item.detail}</li>
            )
        }
        return (
            <div className="col-md-4 business">
                <div className='card-name'>
                    <ol>
                        {this.props.items.map(createName) }
                    </ol>
                </div>
                <div className='card-detail'>
                    <ol>
                        {this.props.items.map(createDetail) }
                    </ol>
                </div>
            </div>
        )
    }
}

module.exports = BusinessCard;