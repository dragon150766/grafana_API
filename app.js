var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/productPage');
var productRouter2 = require('./routes/productPage2')
var productRouter3 = require('./routes/productPage3')
var productRouter4 = require('./routes/productPage4')

var app = express();

mongoose.connect('mongodb+srv://Siripong:P420@2013110305-fluk.lwcv68e.mongodb.net/grafana-test-data?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product1',productRouter);
app.use('/product2',productRouter2);
app.use('/product3',productRouter3);
app.use('/product4',productRouter4);

module.exports = app;