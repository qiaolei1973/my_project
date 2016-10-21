import React from 'react';
import Static from '../../Static/Static';
import Util from '../../Util/Util';

//管理员操作新闻面板
class NewsList extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const news = Static.News.items;
        sessionStorage.setItem('news', JSON.stringify(news));
        return (
            <section>
                <div className='container page-top'>
                    <div className='row'>
                        <table className='table table-hover table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>名称</th>
                                    <th>上次修改时间</th>
                                    <th>查看</th>
                                    <th>修改</th>
                                    <th>删除</th>
                                </tr>
                            </thead>
                            <NewsItems data={news} />
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

class NewsItems extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const {data} = this.props;
        const createNewsItem = (item, index) => {
            let key = Util.getGuid();
            const id = item.id;
            const href = '/news/' + id;
            const trClass = 'item-id' + index;
            const _id = index;
            var _time = new Date(item.time);
            const time = Util.getDate(item.time) + '  ' + _time.getHours() + ':' + _time.getMinutes() + ':' + _time.getSeconds();
            return (
                <tr className={trClass} key={key}>
                    <td>{item.title}</td>
                    <td>{time}</td>
                    <td><a targer='view' href={href}>查看</a></td>
                    <td><button data-toggle="modal" className='btn btn-warning' data-target="#newsModifyModal">修改</button></td>
                    <td>
                        <button className='btn btn-danger del' type='button' data-id={_id}>删除</button>
                    </td>
                </tr>
            )
        }
        return (
            <tbody>
                {data.map(createNewsItem)}
            </tbody>
        )
    }
}

module.exports = NewsList;