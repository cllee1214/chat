var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/chat', {useNewUrlParser: true})
var db = mongoose.connection

db.on('error', function(){
  console.log('连接失败!')
})

db.on('open', function(){
  console.log('连接成功!')
})


module.exports = mongoose