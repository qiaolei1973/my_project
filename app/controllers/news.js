//数据模型
var _ = require('underscore');
var News = require('../models/news')

//添加新闻
exports.addNews = function (req, res) {
    var _news = req.body
    //如果传来的数据包含id则更新该数据
    if (_news.id) {
        News.findById(id, function (err, news) {
            if (err) {
                console.log(err)
                return res.send({ status: 2 })
            }
            _news = _.extend(news, _news)
        })
    }
    News.findOne({ title: _news.title }, function (err, news) {
        if (err) {
            console.log(err)
            return res.send({ status: 2 })
        }
        if (news) {
            return res.send({ status: 1 })
        }
        else {
            var news = new News(_news)
            news.save(function (err) {
                if (err) {
                    console.log(err)
                    return res.send({ status: 2 })
                }
                return res.send({ status: 0 })
            })
        }
    })
    //res.send(Static.Summary.NewsCard.items)
}

/**
 * 新闻更新
 */
exports.updateNews = function (req, res) {
    var _news = req.body
    var updateNews
    //console.log(_news)
    //var upNews
    //如果传来的数据包含id则更新该数据
    var id = _news._id
    if (id) {
        News.findById(id, function (err, news) {
            if (err) {
                console.log(err)
                return res.send({ status: 2 })
            }
            updateNews = _.extend(news, _news)
            updateNews.save(function (err, news) {
                if (err) {
                    console.log(err)
                    return res.send({ status: 2 })
                }
                return res.send({ status: 0 })
            })
        })
    }
    //return res.send({ status: 1 })
}

//fetch
exports.fetchNews = function (req, res) {
    News.find(function (err, newses) {
        if (err) {
            console.log(err)
            return res.send({ status: 2 })
        }
        res.send(newses)
    })
    //res.send(Static.Summary.NewsCard.items)
}

//delete
exports.delNews = function (req, res) {
    console.log(req.body)
    var _id = req.body
    console.log(_id)
    if (_id) {
        News.remove({ _id: _id }, function (err, news) {
            if (err) {
                console.log(err)
                return res.send({ status: 2 })
            }
            return res.send({ status: 0 })
        })
    }
}
