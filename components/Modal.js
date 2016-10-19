import React from 'react';
//图片-文字模板
class AboutModal extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;

        return (
            <div class="modal fade" id="about-modal" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span class="sr-only">关闭</span></button>
                            <h4 class="modal-title" id="modal-label">关于</h4>
                        </div>
                        <div class="modal-body">
                            <p>慕课网隶属于北京慕课科技中心(有限合伙)，是一家从事互联网免费教学的网络教育公司。秉承“开拓、创新、公平、分享”的精神， 将互联网特性全面的应用在教育领域，致力于为教育机构及求学者打造一站式互动在线教育品牌。
                        </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">了解了</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Modal extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;

        return (
            <div class="modal fade" id="about-modal" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    {this.props.dom}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Modal;