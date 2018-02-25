import React from 'react';
import Util from '../../Util/Util';
import Static from '../../Static/Static';
//文字模板(加入我们)
class QuestionLine extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const img = this.props.img;
        const path = 'url(' + img + ')';
        return (
            <section>
                <div className='img-line' style={{ backgroundImage: path }}>
                </div>
            </section>
        )
    }
}

module.exports = QuestionLine;