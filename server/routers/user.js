var express = require('express');
var router = express.Router();
var path = require('path')
var fs = require('fs')
var formidable = require('formidable');
var User = require('../db/models.js').user


var renameImage = function (oldpath, newpath) {
  return new Promise(function (resolve, reject) {
    fs.rename(oldpath, newpath, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(newpath)
      }
    })
  })
}

var removeOldImg = function (user) {
  return new Promise(function(resolve, reject) {
    User.findOne().where({user}).then(result => {
      var path = result.avatar
      if(path) {
        fs.unlink(path, function(e) {
          if(e) {
            reject(e)
          }else{
            resolve()
          }
        })
      }else{
        resolve()
      }
    }).catch(err => {
      reject(err)
    })
  })
}

var updateInfo = function(data) {
  console.log(data)
  return User.updateOne({$set: data}).where({user: data.user})
}

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
    // console.log(err)
    res.json({
      code: '0',
      msg: '拉取失败'
    })
  })
})


router.get('/info', function(req, res) {
  var user = req.query.user
  var needFriendsAndGroup = req.query.needFriendsAndGroup
  console.log(needFriendsAndGroup)
  User.findOne().where({user}).then(doc => {
    if(needFriendsAndGroup) {
      res.json({
        code: '1',
        msg: '拉取成功',
        data: doc.friends,
        groups: doc.groups
      })
    }else{
      res.json({
        code: '1',
        msg: '拉取成功',
        data: doc
      })
    }  
  }).catch(err => {
    res.json({
      code: '0',
      msg: '拉取失败'
    })
  })
})

router.post('/update', function(req, res) {
  var form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, '../upload/avatar');
  form.parse(req, function (err, fields, file) {
    var data = {
      nickname: fields.nickname,
      declaration: fields.declaration,
      user: fields.user
    }
    if(file && file.avatar) {
      var avatar = data.avatar = file.avatar
      var oldpath = avatar.path;
      var extname = path.extname(avatar.name)
      // console.log('======')
      // console.log(oldpath)
      // console.log(avatar.name)
      // console.log(path.dirname(oldpath))
      // console.log(path.extname(avatar.name))

      // var newpath = path.join(path.dirname(oldpath), avatar.name);
      var newpath = path.join(path.dirname(oldpath), new Date().getTime() + extname);
      console.log(newpath)
      console.log('======')
      renameImage(oldpath, newpath).then(newpath => {
        console.log(1)
        removeOldImg(data.user).then(() => {
          console.log(2)
          data.avatar = newpath
          updateInfo(data).then(r => {
            console.log(3)
            res.json({
              msg: '更新成功',
              code: 1
            })
          }).catch(e => {

          })
        }).catch(e => {
          res.json({
            msg: '更新失败',
            code: 0
          })
        })
      }).catch(err => {
        res.json({
          msg: '更新失败',
          code: 0
        })
      })
    }else {
      updateInfo(data).then(r => {
        res.json({
          msg: '更新成功',
          code: 1
        })
      })
    }
  });
})

module.exports = router;