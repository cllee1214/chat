var express = require('express');
var router = express.Router();
var userInfo = require('./data')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/chat";

router.get('/home', function(req, res) {
  if(req.session.user){
    res.render('home', {user: req.session.user});
  }else{
    res.redirect('login')
  }
});

router.get('/login', function(req, res){
  if(req.session.user){
    res.redirect('/home')
  }else{
    res.render('login');
  }
})

router.get('/regist', function(req, res){
  if(req.session.user){
    res.redirect('/home')
  }else{
    res.render('regist');
  }
})


router.post('/login', function(req, res){
  var user = req.body.user;
  var pwd = req.body.pwd

  MongoClient.connect(url, function(e, client){
    var db = client.db('chat')
    db.collection('user').findOne({user: user},function(e, doc) {
      if(doc && doc['pwd'] == pwd){
        console.log(doc)
        req.session.user = user
        res.redirect('/home')
      }else{
        console.log(e)
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
    var data = {user: user, pwd: pwd}
    db.collection('user').insertOne(data, function(e, r){
      if(e){
        res.json({
          code: 0,
          msg: '注册失败，请重试！'
        })
      }else{
        console.log('注册成功')
        req.session.user = user
        res.redirect('/home')
      }
    })
  })
})

router.get('/logout',function(req, res){
  req.session.destroy()
  console.log('退出')
  res.redirect('login')
})

module.exports = router;