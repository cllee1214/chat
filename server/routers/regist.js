var express = require('express');
var router = express.Router();
var db = require('../db/connect.js')
var User = require('../db/models.js').user

router.get('/test', function() {
    console.log(4444444444444)
  var user = new User({
      user: 'ccc',
      pwd: '111111'
  })
  user.save().then((user) => {
    console.log('save user', user)
  })
})

module.exports = router;