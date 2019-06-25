var server = require('./createServer')
var io = require("socket.io")(server);


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


module.exports = server