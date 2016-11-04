import React from 'react';
import { connect } from "react-redux"
import { addNews,updateNews, setCurrentNews } from "../../actions/newsActions"
import Observer from "../../Util/Observer"
@connect((store) => {
    return {
        currentNews: store.news.currentNews
    }
})
//新闻动态
class NewsModal extends React.Component {
    constructor(prop) {
        super(prop);
        this.click = () => {
            const news = this.state.news
            if (news._id) {
                //update
                this.props.dispatch(updateNews(news))
            } else {
                //add
                this.props.dispatch(addNews(news))
            }
            this.setState({news:null})
        }
        this.state = { news: null }
        this.titleChange = (e) => {
            let news = this.state.news ? this.state.news : {}
            news.title = e.target.value
            this.setState({ news: news })
        }

        this.articleChange = (e) => {
            let news = this.state.news ? this.state.news : {}
            news.article = e.target.value
            this.setState({ news: news })
        }
    }
    componentDidMount() {
        const {type} = this.props
        if (type && type === 'add') return
        let _self = this
        const currentNews = this.props
        Observer.remove('setValue')
        Observer.regist('setValue', function (val) {
            const currentNews = val.args
            //_self.props.dispatch(setCurrentNews(currentNews))
            _self.setState({ news: currentNews })
            _self.refs.title.value = currentNews.title
            _self.refs.article.value = currentNews.article
        })
    }
    render() {
        const {type} = this.props
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
                            <input id={title_id} className='form-control' type='text' ref='title' onChange={this.titleChange} />
                            <label htmlFor={article_id}>文章</label>
                            <textarea id={article_id} className='form-control' type='textarea' ref='article' onChange={this.articleChange} />
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-success' type='button' onClick={this.click} data-dismiss='modal'>确定</button>
                            <button className='btn btn-default' type='button' data-dismiss='modal'>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = NewsModal;