var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var config = require('../config/index.js')
var User = require('../db/models.js').user

router.post('/', function(req, res) {
  var user = req.body.user;
  var pwd = req.body.pwd
  User.findOne().where({user}).then(doc => {
    console.log(doc)
    if (doc && doc['pwd'] == pwd) {
      res.json({
        code: '1',
        msg: '登录成功',
        token: jwt.sign({user}, config.secret, { expiresIn: '2h' })
      })
    } else {
      res.json({
        code: 0,
        msg: '用户或密码错误！'
      })
    }
  }).catch(error => {
    res.json({
      code: 0,
      msg: '用户或密码错误！'
    })
    console.log(error)
  })
})

module.exports = router;