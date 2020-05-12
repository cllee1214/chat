var server = require('./createServer')
var io = require("socket.io")(server);


var userList = {}

var serverClient = io.on('connection', function (socket) {
  var user = socket.handshake.query.user
  var id = socket.id

  // 上线
  // 1.存储相关信息
  // 2.通知其他用户
  userList[user] = id
  serverClient.emit('sys', {
    user: user,
    msg: user + "上线",
  })
 

  //发送在线用户列表
  serverClient.emit('userList', userList);

  // 离线
  // 1.删除用户
  // 2.通知其他用户
  socket.on('disconnect', function(reason){
    delete userList[user]
    serverClient.emit('sys', {
      user: user,
      msg: user + "离线"
    })
  })

  //转发消息
  socket.on('msg',function(data){
    var friendWho = data.to
    var id = userList[friendWho]
    socket.to(id).emit('msg',{
      from: data.from,
      message: data.message,
      to: data.to
    })
    console.log(data)
  })
  
});


module.exports = server