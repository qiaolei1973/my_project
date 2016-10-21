import React from 'react';
//新闻动态
class NewsModifyModal extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <div id='newsModifyModal' className='modal fade' tabIndex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                            <div className='modal-header'></div>
                            <div className='modal-body'>
                                <div className='form-group'>
                                    <label htmlFor='signinName'>名称</label>
                                    <input id='signinName' className='form-control'  type='text'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='signinPasssword'>文章</label>
                                    <textarea id='signinPasssword' className='form-control'  type='textarea'/>
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button className='btn btn-success' type='submit'>确定</button>
                                <button className='btn btn-default' type='button' data-dismiss='modal'>取消</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = NewsModifyModal;