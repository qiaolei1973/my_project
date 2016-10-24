var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')
var _ = require('underscore');
var compression = require('compression')
var mongoose = require('mongoose')
var md5 = require('md5')


var Data = require('./models/data')
var User = require('./models/user')
var Static = require('./Static/Static')

var port = process.env.PORT || 3000
var app = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:12345/project')

app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(serveStatic('node_modules'))
//用户持久化模块引入
app.use(express.cookieParser())
app.use(express.session({
    secret:'login'
}))


app.listen(port)
console.log(md5('admin'))
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
    console.log(req.body);
    res.send(Static.Summary.NewsCard.items)
})

/**
 * 管理员注册
 */

app.post('/user/__singup', function (req, res) {
    var _user = req.body.user
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
    var _user = req.body.user
    //var existUser = {name:'a',password:'b'}
    var name = _user.name
    var password = _user.password
    User.findOne({ name: name }, function (err, user) {
        if (err) {
            console.log(err)
        }
        if (!user) {
            return res.redirect('/')
        }
        if (user.password === password) {
            req.session.user = user
            return res.redirect('/admin')
        }
        res.redirect('/')
    })

})

console.log('service start' + port)