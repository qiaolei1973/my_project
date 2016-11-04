import React from 'react';
import Static from '../../Static/Static';
import Util from '../../Util/Util';
import Observer from '../../Util/Observer';
import { connect } from "react-redux"
import { fetchNews, setCurrentNews ,delNews} from "../../actions/newsActions"
import NewsModal from '../modal/NewsModal';
import ConfirmModal from '../modal/NewsModal';

@connect((store) => {
    return {
        news: store.news.news,
        newsFetched: store.news.fetched,
    }
})

//管理员操作新闻面板
class NewsList extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = { currentNews: null }
        this.childEvent = (currentNews) => {
            Observer.fire('setValue', currentNews)
        }
    }
    componentWillMount() {
        var _self = this
        this.props.dispatch(fetchNews())
        Util.setCache('news', this.props.news)
        Observer.regist('newsChange', function () {
            _self.props.dispatch(fetchNews())
        })
    }
    render() {
        const {news} = this.props;
        const {currentNews} = this.state
        return (
            <section>
                <div className='container page-top'>
                    <div className='row'>
                        <table className='table table-hover table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>标题</th>
                                    <th>上次修改时间</th>
                                    <th>查看</th>
                                    <th>修改</th>
                                    <th>删除</th>
                                </tr>
                            </thead>
                            <NewsItems news={news} callBackParent={this.childEvent} />
                        </table>
                    </div>
                </div>
                <NewsModal ref='newsModify' type={'modify'} currentNews={currentNews} />
                <NewsModal ref='newsAdd' type={'add'} />
            </section>
        )
    }
}

@connect((store) => {
    return {
        news: store.news.news
    }
})
class NewsItems extends React.Component {
    constructor(prop) {
        super(prop)
        this.modifyClick = (e) => {
            console.log(this.props)
            const _id = e.target.dataset.id
            const {news} = this.props
            for (let i = 0; i < news.length; i++) {
                if (news[i]._id === _id) {
                    console.log(news[i])
                    this.props.callBackParent(news[i])
                    // this.props.dispatch(setCurrentNews(news[i]))
                    break
                }
            }
        }
        this.delClick = (e) => {
            var el = e.target
            var _id = el.dataset.id
            console.log(this.props)
            this.props.dispatch(delNews(_id))
        }
    }

    render() {
        const {news} = this.props;
        const createNewsItem = (item, index) => {
            if (!item) return
            let key = Util.getGuid();
            const id = item._id
            const href = '/news/' + id
            const trClass = 'item-id' + index
            const _time = new Date(item.meta.updateAt)
            const time = Util.getDate(_time) + '  ' + Util.getSec(_time);
            return (
                <tr className={trClass} key={key}>
                    <td>{item.title}</td>
                    <td>{time}</td>
                    <td><a targer='view_window' href={href}>查看</a></td>
                    <td><button data-toggle="modal" className='btn btn-warning' data-target="#newsModifyModal" data-id={id} onClick={this.modifyClick}>修改</button></td>
                    <td>
                        <button className='btn btn-danger del' type='button' data-id={id} onClick={this.delClick}>删除</button>
                    </td>
                </tr>
            )
        }
        return (
            <tbody>
                {news.map(createNewsItem)}
            </tbody>
        )
    }
}

module.exports = NewsList;