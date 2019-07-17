var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/chat";

router.post('/', function(req, res, next) {
  console.log(req.body.userName)
  var userName = req.body.userName
  var password = req.body.password
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    var dbo = db.db('chat')
    dbo.collection('users').find({
      name: userName
    }).toArray(function(err, result){
      if(err) throw err
      console.log(result)
      if(result.length && result[0].password === password){
        res.json({
          msg: '登录成功',
          code: '1'
        })
      }else{
        res.json({
          msg: '登录失败',
          code: '0'
        })
      }
    })
    
    db.close();
  });
  
});

module.exports = router;
