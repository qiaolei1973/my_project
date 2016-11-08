var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cookieSession = require('cookie-session')
var port = process.env.PORT || 3000
var app = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:12345/project')
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

//拿到当前环境
if('development' === app.get('env')){
    app.set('showStackError',true)
}

//引入数据模型
require('./config/routes')(app)

app.listen(port)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

console.log('service start' + port)