var express = require('express');
var router = express.Router();
var Group = require('../db/models.js').group

router.post('/create', function(req, res) {
    var name = req.body.name
    var needValidate = req.body.validate
    var user = req.body.user
    var group = new Group({
        name,
        needValidate,
        creatBy: user,
        users: [user],
        id: parseInt(Math.random() * 1000000) + ''
    })
    group.save().then(data => {
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