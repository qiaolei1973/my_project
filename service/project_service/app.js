var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var mongoose = require('mongoose');
var Data = require('./models/data');

mongoose.connect('mongodb://localhost/testCase');

app.listen(port);

var data = Data.fetch(function(err,vals){
    if(err){
        console.log(err);
    }
    return vals;
})

console.log('service start')
console.log('data' + data);