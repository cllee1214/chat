const server = require('./creatServer')
const io = require("socket.io")(server);
const MessageHelper =  require('./messageHelper')

const messageHelper = new MessageHelper()

var serverClient = io.on('connection', function (socket) {
  var nickname = socket.handshake.query.nickname
  var id = socket.id

  // 上线
  // 1.存储相关信息
  // 2.通知其他用户
  messageHelper.accessUserMap(nickname, id)
  serverClient.emit('sys', {
    user: nickname,
    msg: nickname + "上线",
  })
 

  //发送在线用户列表
  serverClient.emit('userList', messageHelper.userMap);

  // 离线
  // 1.删除用户
  // 2.通知其他用户
  socket.on('disconnect', function(reason){
    messageHelper.accessUserMap(nickname)
    serverClient.emit('sys', {
      user: nickname,
      msg: nickname + "离线"
    })
  })

  //转发消息
  socket.on('msg',function(data){
    var id = data.id
    socket.to(id).emit('msg',{
      id: id,
      message: data.message,
      from: data.from
    })
    console.log(data)
  })
  
});

module.exports = server