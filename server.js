var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require("socket.io")(server);
var ejs = require('ejs')
var path = require('path')

app.set('views', path.join(__dirname, 'dist'));
app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, 'dist')));

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index');
});

server.listen(3000, function(){
  console.log('ok')
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
  
});