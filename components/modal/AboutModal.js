import React from 'react';
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
                            <p>慕课网隶属于北京慕课科技中心(有限合伙)，是一家从事互联网免费教学的网络教育公司。秉承“开拓、创新、公平、分享”的精神， 将互联网特性全面的应用在教育领域，致力于为教育机构及求学者打造一站式互动在线教育品牌。
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