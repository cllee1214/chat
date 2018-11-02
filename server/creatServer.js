const express = require('express');
const app = express();
const server = require('http').Server(app);

const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const secret = 'cai'

var  User = require('../db/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'dist'));
app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, 'dist')));

//测试允许跨域
app.use("*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index');
});

app.get('/testdb', function(req, res, next) {
  var user = new User({
    name: 'lee',
    password: '111111'
  })
  console.log(user.name)
  user.save(function(err){
    if(err){
      console.log(err)
    }
  })
});


app.post('/login', function(req, res, next){
  console.log('login...')
  var name = req.body.nickname
  var password = req.body.password
  User.findOne({name: name}).exec(function(err, adv){
    if(err){
      res.json({
        msg: '登录失败，请重试',
        code: -1
      })
      return
    }
    if(adv && adv.password === password){
      var token = jwt.sign({ name }, secret)
      res.json({
        msg: '登录成功',
        code: 1,
        token: token
      })
    }else{
      res.json({
        msg: '登录失败，请重试',
        code: -1
      })
    }
  })
})

module.exports = server