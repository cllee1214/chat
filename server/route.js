var express = require('express');
var router = express.Router();
var userInfo = require('./data')

// router.use(function(req, res, next){
//   console.log(req)
//   next()
// })

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


router.post('/login', function(req, res){
  var user = req.body.user;
  var pwd = req.body.pwd
  if(userInfo[user] && pwd == userInfo[user]){
    req.session.user = user
    res.redirect('/home')
  }else{
    res.json({
      code: 0,
      msg: '用户或密码错误！'
    })
  }
})

router.get('/logout',function(req, res){
  req.session.destroy()
  console.log('退出')
  res.redirect('login')
})

module.exports = router;