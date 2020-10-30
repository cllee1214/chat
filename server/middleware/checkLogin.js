var jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  const skips = ['/login', '/regist', '/']
  console.log(req.url)
  if(skips.indexOf(req.url) != -1) {
    next()
    return
  }
  const token = req.get('Authorization')
  jwt.verify(token, 'cai', function(err, decode) {
    if(err) {
      res.json({
        code: -1,
        msg: '登录过期，请重新登录'
      })
    }else {
      next()
    }
  })
}