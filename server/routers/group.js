var express = require('express');
var router = express.Router();
var Group = require('../db/models.js').group
var User = require('../db/models.js').user

router.post('/create', function(req, res) {
    var name = req.body.name
    var needValidate = req.body.validate
    var user = req.body.user
    var gid = parseInt(Math.random() * 1000000) + ''
    var group = new Group({
        name,
        needValidate,
        creatBy: user,
        users: [user],
        id: gid
    })
    group.save().then(data => {
        User.where({user}).updateOne({$push: {groups: gid}}).then(result => {
            res.json({
                code: '1',
                msg: '群创建成功'
            })
        }).catch(err => {
            res.json({
                code: '0',
                msg: '创建群失败'
            })
        })
    }).catch(err => {
        res.json({
            code: '0',
            msg: '创建群失败'
        })
    })
})

router.get('/allGroups', function(req, res) {
    Group.find().then(groups => {
        res.json({
            code: '1',
            groups
        })
    }).catch(err => {
        res.json({
            code: 0,
            msg: '拉取失败'
        })
    })
})

module.exports = router;