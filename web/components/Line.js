import React from 'react';
//图片-文字模板
class Line extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;

        return (
            <div className='full-line'  style={data.background}>
                <div className='line'>
                    <div className={data.className}>
                        <h2>{data.title}</h2>
                        <p>{data.article}</p>
                    </div>
                    <img src={data.img} alt={data.alt}/>
                </div>
            </div>
        )
    }
}

module.exports = Line;