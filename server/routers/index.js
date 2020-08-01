var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var formidable = require('formidable');
var path = require('path')
var fs = require('fs')

var MongoClient = require('mongodb').MongoClient;
var dbLoctaion = 'nas'
var url = dbLoctaion ? "mongodb://192.168.1.111:27017/chat" : "mongodb://localhost:27017/chat";

var secret = 'cai'


router.get('/', function (req, res) {
  res.render('index.html')
})

function insertInfo(obj, res) {
  MongoClient.connect(url, function (e, client) {
    var db = client.db('chat')
    var whereData = { user: obj.user }
    var newData = { $set: obj }
    db.collection('user').updateMany(whereData, newData, function (e, r) {
      if (e) {
        console.log('更新资料失败')
        res.json({
          code: '0',
          msg: '更新资料失败'
        })
      } else {
        res.json({
          code: '1',
          msg: '更新资料成功'
        })
        console.log('更新成功')
      }
    })
  })
}

function removeOldImg(obj, res) {
  MongoClient.connect(url, function (e, client) {
    var db = client.db('chat')
    var whereData = { user: obj.user }
    db.collection('user').findOne(whereData, function (e, doc) {
      if (e) {

      } else {
        var path = doc.avatar
        fs.unlink(path, function (err) {
          if (err) {
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

router.post('/info', function (req, res) {
  var form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, './upload/avatar');
  form.parse(req, function (err, fields, file) {
    var data = {
      nickname: fields.nickname,
      declaration: fields.declaration,
      user: fields.user
    }
    if (file && file.avatar) {
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
      new Promise(function (resolve, reject) {
        fs.rename(oldpath, newpath, (err) => {
          if (err) {
            reject(err)
          } else {
            resolve(newpath)
          }
        })
      }).then(function (newpath) {
        data.avatar = newpath
        removeOldImg(data, res)
      })
    } else {
      removeOldImg(data, res)
    }
  });
})

router.get('/info/user/:user/', function (req, res) {
  var user = req.params.user
  MongoClient.connect(url, function (e, client) {
    var db = client.db('chat')
    db.collection('user').findOne({ user: user }, function (e, doc) {
      if (e) {
        res.json({
          code: '0',
          msg: '获取' + user + '资料失败'
        })
      } else {
        if (doc) {
          doc.code = '1'
          doc.msg = '获取成功'
          res.json(doc)
        } else {
          res.json({
            code: '0',
            msg: user + '不存在'
          })
        }
      }
    })
  })
})


router.post('/createGroup', function (req, res) {
  var name = req.body.name
  var location = req.body.location
  var validate = req.body.validate
  var user = req.body.user

  MongoClient.connect(url, function (e, client) {
    var db = client.db('chat')
    var gid = parseInt(Math.random() * 1000000) + ''
    var data = {
      name,
      location,
      validate,
      creatBy: user,
      users: [user],
      id: gid
    }
    db.collection('group').insertOne(data, function (e, r) {
      if (e) {
        res.json({
          code: '0',
          msg: '创建群失败'
        })
      } else {
        db.collection('user').update({user: user}, {$push: {groups: gid}, function(err) {
          if(err){
            res.json({
              code: '0',
              msg: '创建群失败'
            })
          }else{
            res.json({
              code: '1',
              msg: '群创建成功'
            })
          }
        }})
      }
    })
  })
  console.log(name, location, user, validate)
})


router.get('/searchGroup/id/:id', function (req, res) {
  var id = req.params.id
  console.log(id)
  MongoClient.connect(url, function (e, client) {
    var db = client.db('chat')
    db.collection('group').findOne({id: id}, function(err, doc) {
      if(err){
        res.json({
          code: '0',
          msg: '查找失败'
        })
      }else{
        console.log(doc)
        if(doc){
          res.json({
            code: '1',
            name: doc.name,
            location: doc.location,
            creatBy: doc.creatBy,
            users: doc.users
          })
        }else{
          res.json({
            code: '0',
            msg: '该群不存在'
          })
        }
      }
    })
  })
})

router.post('/addGroup/id/:id/user/:user', function(req, res) {
  var id = req.params.id
  var user = req.params.user
  console.log(id, user)
  MongoClient.connect(url, function (e, client) {
    var db = client.db('chat')
    db.collection('group').update({id: id}, {$push: {users: user}}, function(err) {
      if(err){
        res.json({
          code: '0',
          msg: '加群失败'
        })
      }else{
        console.log(2)
        db.collection('user').update({user: user}, {$push: {groups: id}}, function(err1) {
          if(err1){
            res.json({
              code: '0',
              msg: '加群失败'
            })
          }else{
            res.json({
              code: '1',
              msg: '加群成功'
            })
          }
        })
      }
    })
  })
})

router.get('/getAllGroups', function(req, res){
  MongoClient.connect(url, function (e, client) {
    var db = client.db('chat')
    db.collection('group').find({}).toArray().then(function(result){
      console.log(result)
      res.json({
        code: '1',
        groups: result
      })
    })
  })
})
module.exports = router;