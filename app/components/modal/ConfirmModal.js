import React from 'react';
/**
 * 确认弹出框
 * this.props:{
 *      data:{
 *          id:弹出框关联
 *          header:标题
 *          body:内容
 *          doubleButton:可选 如果为true则有两个按钮
 *          click:有两个按钮时确认的绑定事件
 *      }     
 * }
 */
class ConfirmModal extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        let footer;
        if (data.doubleButton) {
            footer = (
                <div className='modal-footer'>
                    <button className='btn btn-success' type='button' onClick={data.click}>确定</button>
                    <button className='btn btn-default' type='button' data-dismiss='modal'>取消</button>
                </div>)
        } else {
            footer = (
                <div className='modal-footer'>
                    <button className='btn btn-default' type='button' data-dismiss='modal'>OK</button>
                </div>)
        }
        return (
            <div id={data.id} className='modal fade' tabIndex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>{data.header}</div>
                        <div className='modal-body'>
                            <p>{data.body}</p>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = ConfirmModal;