const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);
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


server.listen(3000, function(){
  console.log('listen on port 3000...')
});

var userList = {}

var serverClient = io.on('connection', function (socket) {
  var nickname = socket.handshake.query.nickname
  var id = socket.id

  // 上线
  // 1.存储相关信息
  // 2.通知其他用户
  userList[nickname] = id
  serverClient.emit('sys', {
    user: nickname,
    msg: nickname + "上线",
  })
 

  //发送在线用户列表
  serverClient.emit('userList', userList);

  // 离线
  // 1.删除用户
  // 2.通知其他用户
  socket.on('disconnect', function(reason){
    delete userList[nickname]
    serverClient.emit('sys', {
      user: nickname,
      msg: nickname + "离线"
    })
  })

  //转发消息
  socket.on('msg',function(data){
    var id = data.currentChatSocketId
    socket.to(id).emit('msg',{
      from: data.from,
      msg: data.msg,
      belong: data.belong
    })
    console.log(data)
  })
  
});