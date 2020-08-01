var express = require('express');
var router = express.Router();
var User = require('../db/models.js').user

router.get('/allUsers', function(req, res) {
  User.find().then(docs => {
    // console.log(docs)
    var data = docs.map(function (item) {
        return {
          user: item.user,
          nickname: item.nickname,
          avatar: item.avatar,
          declaration: item.declaration
        }
    })
    res.json({
      code: '1',
      data: data,
      msg: '拉取成功'
    })
  }).catch(err => {
    console.log(err)
    res.json({
      code: '0',
      msg: '拉取失败'
    })
  })
})


router.get('/friendsInfo/user/:user', function(req, res) {
  var user = req.params.user
  User.findOne().where({user}).then(doc => {
    res.json({
      code: '1',
      msg: '拉取成功',
      data: doc.friends,
      groups: doc.groups
    })
  }).catch(err => {
    res.json({
      code: '0',
      msg: '拉取失败'
    })
  })
})

module.exports = router;