var express = require('express');
var app = express();
var route = require('./route')
var path = require('path')
var ejs = require('ejs')
var session = require('express-session');
var bodyParser = require('body-parser');

app.enabled('etag')
app.use(session({
  secret :  'secret', // 对session id 相关的cookie 进行签名
  resave : true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie : {
      maxAge : 1000 * 60 * 3000, // 设置 session 的有效时间，单位毫秒
  },
}));


app.use(bodyParser.urlencoded({
    extended:true
}));

app.set('views', path.join(__dirname, 'view'));
app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, 'static')));
app.use('/', route)

module.exports = app