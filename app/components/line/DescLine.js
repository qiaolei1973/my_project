import React from 'react'
//产品描述 上图下文字
class DescLine extends React.Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        const {data} = this.props
        const path = '/images/' + data.path
        return (
                <div className='descline'>
                    <div className='descline-img'>
                            <img src={path} />
                        <div className='describe'>
                                <span>{data.desc}</span>
                        </div>
                    </div>
                </div>
            )
    }
}

module.exports = DescLine;