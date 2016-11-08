import React from 'react';
import EmptyModal from '../modal/EmptyModal';
//图片-文字模板
class Line extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const {data,id} = this.props
        const {details,params} = data
        const img = '../images/' + data.img
        const detailsID = id + 'details'
        const paramsID = id + 'params'
        const target_details = '#' + detailsID 
        const target_params = '#' + paramsID 
        return (
            <div className='full-line'  style={data.background}>
                <div className='line'>
                    <div className={data.className}>
                        <center><h2>{data.title}</h2></center>
                        <p>{data.article}</p>
                        <center>
                        <button type='button' data-toggle="modal" data-target={target_details} style={{margin:'20px'}} className='btn default-btn'>查看详细介绍</button>
                        <button type='button' data-toggle="modal" data-target={target_params} className='btn default-btn'>查看参数指标</button>
                        </center>
                        <EmptyModal details={details} id={detailsID} title={'详细介绍'} footer={'关闭'}/>
                        <EmptyModal params={params} id={paramsID} title={'参数指标'} footer={'关闭'}/>
                    </div>
                    <img src={img} alt={data.alt}/>
                </div>
            </div>
        )
    }
}

module.exports = Line;