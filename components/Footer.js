import React from 'react';
//新闻动态
class Footer extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <section>
                <p className="pull-right"><a href="#top">{data.return}</a></p>

                <p>{data.copyRight} </p>
            </section>
        )
    }
}

module.exports = Footer;