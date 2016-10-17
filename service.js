var express = require('express');
var path = require('path')
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var _ = require('underscore');
var compression = require('compression')
var mongoose = require('mongoose');

var Data = require('./models/data');
var Static = require('./Static/Static'); 

var port = process.env.PORT || 3000;
var app = express();

app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serveStatic('node_modules'));

// mongoose.connect('mongodb://localhost/testCase');

app.listen(port);

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
    console.log(req.body);
    res.send('hello world');
})

app.post('/news/fetchNews', function (req, res) {
    console.log(req.body);
    res.send(Static.Summary.NewsCard.items);
    debugger
})

app.post('/login', function (req, res) {
    var _user = req.body.user;
    var userName = _user.userName;
    var password = _user.password;
    console.log(req.body.user);
    if (password) {
        res.send({ status: 0 });
    } else {
        res.send({ status: 1 });
    }
})

console.log('service start' + port)