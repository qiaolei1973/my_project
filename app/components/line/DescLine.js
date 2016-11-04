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
                        <center>
                            <img src={path} />
                        </center>
                        <div className='describe'>
                            <center>
                                <span>{data.desc}</span>
                            </center>
                        </div>
                    </div>
                </div>
            )
    }
}

module.exports = DescLine;