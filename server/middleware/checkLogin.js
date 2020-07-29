var jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  const skips = ['/login','/regist']
  if(skips.indexOf(req.url) != -1) {
    next()
  }
  const token = req.get('Authorization')
  jwt.verify(token, 'cai', function(err, decode) {
    console.log(err)
    console.log(decode)
    if(err) {
      res.json({
        code: 0,
        msg: '登录过期，请重新登录'
      })
    }else {
      next()
    }
  })
}