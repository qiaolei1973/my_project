import React from 'react';
//新闻动态
class NewsModal extends React.Component {
    constructor(prop) {
        super(prop);
        this.click = (_refs) => {
            const dom1 = this.refs.title
            const dom2 = this.refs.article
            const val = dom1.value
            debugger
        }
    }
    // componentWillMount() {
    //     const news =JSON.parse(sessionStorage.getItem('newsCache'))
    //     if(this.props.type === 'modify' && news){
    //         const news =JSON.parse(sessionStorage.getItem('newsCache'))
    //         this.refs.title.value = news.title
    //         this.refs.article.value = news.article
    //     }
    // }
    render() {
        const type = this.props.type
        const header = type === 'add' ? '添加' : '修改'
        const _id = type === 'add' ? 'newsAddModal' : 'newsModifyModal'
        const title_id = 'title' + type
        const article_id = 'article' + type
        return (
            <div id={_id} className='modal fade' tabIndex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            {header}
                        </div>
                        <div className='modal-body'>
                            <label htmlFor={title_id}>标题</label>
                            <input id={title_id} className='form-control' type='text' ref='title' />
                            <label htmlFor={article_id}>文章</label>
                            <textarea id={article_id} className='form-control' type='textarea' ref='article' />
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-success' type='button' onClick={this.click}>确定</button>
                            <button className='btn btn-default' type='button' data-dismiss='modal'>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = NewsModal;