var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var formidable = require('formidable');
var path  = require('path')
var fs = require('fs')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/chat";

var secret = 'cai'


router.get('/', function(req, res){
  res.render('index.html')
})

router.post('/login', function(req, res){
  console.log('user', req.body.user)
  var user = req.body.user
  var pwd = req.body.pwd
  MongoClient.connect(url, function(e, client){
    var db = client.db('chat')
    db.collection('user').findOne({user: user},function(e, doc) {
      console.log(doc)
      if(doc && doc['pwd'] == pwd){
        res.json({
          code: '1',
          msg: '登录成功',
          token: jwt.sign({user: user}, secret, { expiresIn: '2h' })
        })
      }else{
        res.json({
          code: 0,
          msg: '用户或密码错误！'
        })
      }
    })
  })
})


router.post('/regist', function(req, res){
  var user = req.body.user;
  var pwd = req.body.pwd

  MongoClient.connect(url, function(e, client) {
    var db = client.db('chat')
    var data = {user: user, pwd: pwd, nickname: user,avatar: '',declaration: ''}
    db.collection('user').insertOne(data, function(e, r){
      if(e){
        res.json({
          code: 0,
          msg: '注册失败，请重试！'
        })
      }else{
        console.log('注册成功')
        res.json({
          code: '1',
          msg: '注册成功',
          token: jwt.sign({user: user}, secret, { expiresIn: '2h' })
        })
      }
    })
  })
})


function insertInfo (obj, res) {
    MongoClient.connect(url, function(e, client) {
      var db = client.db('chat')
      var whereData = {user: obj.user}
      var newData = {$set: obj}
      db.collection('user').updateMany(whereData, newData, function(e, r){
        if(e){
          console.log('更新资料失败')
          res.json({
            code: '0',
            msg: '更新资料失败'
          })
        }else{
          res.json({
            code: '1',
            msg: '更新资料成功'
          })
          console.log('更新成功')
        }
      })
    })
}

function removeOldImg (obj, res) {
  MongoClient.connect(url, function(e, client) {
    var db = client.db('chat')
    var whereData = {user: obj.user}
    db.collection('user').findOne(whereData, function(e, doc){
      if(e){

      }else{
        var path = doc.avatar
        fs.unlink(path, function(err){
          if(err){
            res.json({
              code: '0',
              msg: '更新资料失败(删除旧图)'
            })
          }
          insertInfo(obj, res)
        })
      }
    })
  })
}

router.post('/info', function(req, res){
  var form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname,'./upload/avatar');
  form.parse(req, function(err,fields,file){
    var data = {
        nickname: fields.nickname,
        declaration: fields.declaration,
        user: fields.user
      }
    if(file && file.avatar){
      var avatar = file.avatar
      var oldpath = avatar.path;
      var extname = path.extname(avatar.name)
      console.log('======')
      console.log(oldpath)
      console.log(avatar.name)
      console.log(path.dirname(oldpath))
      console.log(path.extname(avatar.name))

      // var newpath = path.join(path.dirname(oldpath), avatar.name);
      var newpath = path.join(path.dirname(oldpath), new Date().getTime() + extname);
      console.log(newpath)
      console.log('======')
      new Promise(function(resolve, reject){
        fs.rename(oldpath, newpath, (err) => {
          if(err) {
            reject(err)
          }else{
            resolve(newpath)
          }
        })
      }).then(function(newpath){
        data.avatar = newpath
        removeOldImg(data, res)
      })
    }else{
      removeOldImg(data, res)
    }
  });
})

router.get('/info/user/:user/', function(req,res){
  var user = req.params.user
  MongoClient.connect(url, function(e, client) {
    var db = client.db('chat')
    db.collection('user').findOne({user: user}, function(e, doc) {
        if(e){
          res.json({
            code: '0',
            msg: '获取'+ user + '资料失败'
          })
        }else{
          if(doc){
            doc.code = '1'
            doc.msg = '获取成功'
            res.json(doc)
          }else{
            res.json({
              code: '0',
              msg: user + '不存在'
            })
          }
        }
    })
  })
})

router.post('/addFriend', function(req, res){
  var friend = req.body.friend
  var user = req.body.user
  
  MongoClient.connect(url, function(e, client) {
    var db = client.db('chat')
  })
})

module.exports = router;