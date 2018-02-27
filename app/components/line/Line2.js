import React from 'react';
import EmptyModal from '../modal/EmptyModal2';
//图片-文字模板
class Line extends React.Component {
    constructor(prop) {
        super(prop);
        var a = 123;
    }
    render() {
        const { data, id } = this.props
        const { content, params, pic } = data
        const detailsID = id + 'details'
        const paramsID = id + 'params'
        const target_details = '#' + detailsID
        const target_params = '#' + paramsID
        return (
            <div className='full-line' style={data.background}>
                <div className='line2'>
                    <img src={pic} alt="" />
                    <div className="line-content">
                        <h2>{data.name}</h2>
                        <p>{data.content}</p>
                        <span>
                            <button type='button' data-toggle="modal" data-target={target_details} style={{ margin: '20px' }} className='btn default-btn'>查看详细介绍</button>
                            <button type='button' data-toggle="modal" data-target={target_params} className='btn default-btn'>查看参数指标</button>
                        </span>
                        <EmptyModal content={content} type="content" id={detailsID} title={'详细介绍'} footer={'关闭'} />
                        <EmptyModal params={params} type="params" id={paramsID} title={'参数指标'} footer={'关闭'} />
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Line;