var server = require('./createServer')
var io = require("socket.io")(server);

var MongoClient = require('mongodb').MongoClient;
var dbLoctaion = 'nas'
var url = dbLoctaion ? "mongodb://192.168.1.111:27017/chat" : "mongodb://localhost:27017/chat";

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
      to: data.to,
      type: data.type
    })
    console.log(data)
  })

  /*
    好友请求
    服务端接收data: {
      type: requst/response
      option: shelve/agree
      from:
      to:
    }
  
    客户端接收data {
      from: 
      message:
      option: shelve/agree(作为好友请求的回复，只有主动请求方用户能收到)
    }
  
  */ 

  var insertFirendFactory = function (updateWhere, updateData) {
   return new Promise(function(resolve, reject){
      MongoClient.connect(url, function(e, client) {
        if(e){
          console.log('xx')
          console.log(e)
        }
        var db = client.db('chat')
        db.collection('user').update(updateWhere, updateData, function(e, r) {
          if(e){
            reject(e)
          }else{
            resolve()
          }
        })
      })
    })
  }
  
  socket.on('addFriend',function(data) {
    var friendWho = data.to
    var id = userList[friendWho]
    if(data.type == 'requst'){
      socket.to(id).emit('addFriend',{
        from: data.from,
        message: data.from + '请求加您为好友'
      })
    }else if(data.type == 'response'){
      if(data.option == 'shelve'){
        //搁置好友请求，暂时不处理
        var updateData = {$push: {friends: {[data.to]: false}}}
      }else if(data.option == 'agree'){
        //同意好友请求
        var updateData = {$push: {friends: {[data.to]: true}}}
        var cb = function () {
          socket.to(userList[data.to]).emit('addFriend',{
            from: data.from,
            message: data.from + '同意你的好友请求',
            option: 'agree'
          })
        }
      }
      //相互把对方的id添加到自己的文档中去，所以有两个promise
      var friendAgreeMePromise = insertFirendFactory({user: data.from}, updateData)
      var addFriendToDocPromise = insertFirendFactory({user: data.to}, {$push: {friends: {[data.from]: true}}})
      var p = Promise.all([friendAgreeMePromise, addFriendToDocPromise])
      p.then(function(){
        cb && cb()
      }).catch(function(e){
        console.log("添加好友失败")
        console.log(e)
      })
    }
   
  })
  
});

MongoClient.connect(url, function (e, client) {
  var db = client.db('chat')
  db.collection('group').find({}).toArray().then(function(groups){
    console.log('group')
    console.log(groups)
    groups.forEach(group => {
      var current = io.of('/' + group.id).on('connection',function(socket) {
        socket.on('msg', function(data) {
          console.log(data)
          current.emit('msg', data)
        })
      })
    })
  })
})



module.exports = server