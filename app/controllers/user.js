//数据模型
var User = require('../models/user')
//md5加密算法
var md5 = require('md5')

//管理员session检查
exports.access = function (req, res, next) {
    var user = req.session.user
    if (!user) return res.redirect('/')
    next()
}

// 管理员注册
exports.singup = function (req, res) {
    var _user = req.body.user
    console.log(req.body)
    var user = new User(_user)
    user.find({ name: _user.name }, function (err, user) {
        if (err) {
            console.log(err)
        }
        if (user) {
            return res.redirect('/')
        } else {
            var user = new User(_user)
            user.save(function (err, user) {
                if (err) {
                    console.log(err)
                }
                res.redirect('/')
            })
        }
    })
}

// 管理员登录
exports.login = function (req, res) {
    var _user = req.body
    var name = _user.name
    var password = _user.password
    User.findOne({ name: name }, function (err, user) {
        //console.log(user)
        if (err) {
            console.log(err)
        }
        if (!user) {
            return res.send({ status: 1 })
        }
        if (user.password === password) {
            req.session.user = user
            return res.send({ status: 0 })
        }
        res.send({ status: 1 })
    })
}

// 管理员注销
exports.logout = function (req, res) {
    delete req.session.user
    res.send({ status: 0 })
}

