import React from 'react'
import Static from '../../Static/Static'
import Util from '../../Util/Util'
import Table from '../table/Table'
//图片-文字模板
class EmptyModal extends React.Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        const {details, id, title, footer, params} = this.props
        let paragraphs,
            table = false
        const createParagraph = (item) => {
            const key = Util.getGuid()
            return (
                <p key={key}>{item}</p>
            )
        }
        if (!details && params) {
            const _param = params._p
            if (params.table) {
                paragraphs = <Table  data= {_param}/>
            } else {
                paragraphs = (<div>{_param.map(createParagraph)}</div>)
            }
        } else if (details && details.length) {
            paragraphs = (<div>{details.map(createParagraph)}</div>)
        } else if (details && !details.length) {
            paragraphs = (<p>{details}</p>)
        } else {
            console.log('there are no details or params define')
        }
        return (
            <div id={id} className='modal fade' tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">关闭</span></button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        <div className="modal-body empty-modal">
                            {paragraphs}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">{footer}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = EmptyModal