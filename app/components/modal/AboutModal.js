import React from 'react';
import Static from '../../Static/Static';

//图片-文字模板
class AboutModal extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;

        return (
            <div id="aboutModal" className='modal fade' tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">关闭</span></button>
                            <h4 className="modal-title" id="modal-label">关于</h4>
                        </div>
                        <div className="modal-body">
                            <p className='about-article'>
                                {Static.AboutModal.data}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">知道了</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = AboutModal;