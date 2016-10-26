var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')
var _ = require('underscore');
var compression = require('compression')
var mongoose = require('mongoose')
var md5 = require('md5')
var cookieSession = require('cookie-session')

var Data = require('./models/data')
var User = require('./models/user')
var Static = require('./Static/Static')

var port = process.env.PORT || 3000
var app = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:12345/project')
//app.use(compression())
app.use(express.static(path.join(__dirname, 'public')))
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(serveStatic('node_modules'))

//用户持久化模块引入
app.use(cookieSession({
    secret: 'project',
    resave: true,
    saveUninitialized: true
}))

app.use('/admin', function (req, res, next) {
    //console.log(req.session.user)
    var user = req.session.user
    if (!user) return res.redirect('/')
    next()
})

app.listen(port)
//console.log(md5('admin'))
// var data = Data.fetch(function(err,vals){
//     if(err){
//         console.log(err);
//     }
//     return vals;
// })
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/test', function (req, res) {
    console.log(req.body)
    res.send('hello world')
})

app.post('/news/fetchNews', function (req, res) {
    res.send(Static.Summary.NewsCard.items)
})

/**
 * 管理员注册
 */

app.post('/user/__singup', function (req, res) {
    var _user = req.body.user
    console.log(req.body)
    var user = new User(_user)
    User.find({ name: _user.name }, function (err, user) {
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
})

/**
 * 管理员登录
 */
app.post('/login', function (req, res) {
    var _user = req.body
    var name = _user.name
    var password = _user.password
    User.findOne({ name: name }, function (err, user) {
            console.log(user)
        if (err) {
            console.log(err)
        }
        if (!user) {
            return res.send({status:1})
        }
        if (user.password === password) {
            req.session.user = user
            return res.send({status:0})
        }
        res.send({status:1})
    })
})

/**
 * 管理员注销
 */
app.post('/logout', function (req, res) {
    delete req.session.user
    res.send({status:0})
})

console.log('service start' + port)