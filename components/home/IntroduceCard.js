import React from 'react';
//公司简介
class IntroduceCard extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <div className="col-md-4 introduce">
                <div className='div-title'>
                    <span>
                        <a href="about/" title={data.title_cn}>{data.title_cn}</a>
                    </span>
                    <b>{data.title_en}</b>
                </div>
                <div className='editor'><span>{data.companyName}</span>{data.text}</div>
            </div>
        )
    }
}

module.exports = IntroduceCard;