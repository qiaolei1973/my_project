import React from 'react';
import EmptyModal from '../modal/EmptyModal';
//图片-文字模板
class Line extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const {data,id} = this.props
        const details = data.details
        const img = '../images/' + data.img
        const target = '#' + id
        return (
            <div className='full-line'  style={data.background}>
                <div className='line'>
                    <div className={data.className}>
                        <h2>{data.title}</h2>
                        <p>{data.article}</p>
                        <button type='button' data-toggle="modal" data-target={target} className='btn default-btn'>查看详细参数</button>
                        <EmptyModal details={details} id={id} title={'详细信息'} footer={'关闭'}/>
                    </div>
                    <img src={img} alt={data.alt}/>
                </div>
            </div>
        )
    }
}

module.exports = Line;