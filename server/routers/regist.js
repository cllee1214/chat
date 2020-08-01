var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var config = require('../config/index.js')
var User = require('../db/models.js').user

router.post('/', function(req, res) {
  var user = req.body.user;
  var pwd = req.body.pwd
  var userInstancee = new User({
      user,
      pwd,
      nickname: user,
      avatar: '',
      declaration: ''
  })
  userInstancee.save().then((data) => {
    console.log('save user', data)
    res.json({
      code: '1',
      msg: '注册成功',
      token: jwt.sign({ user: user }, config.secret, { expiresIn: '2h' })
    })
  }).catch((err) => {
    // console.log(JSON.stringify(err))
    // console.log(Object.keys(err.errors))
    const keys = Object.keys(err.errors)
    res.json({
      code: 0,
      msg: err.errors[keys[0]].message
    })
  })
})

module.exports = router;