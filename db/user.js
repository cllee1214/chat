var mongoose = require('./connect')
// console.log(mongoose)
var userSchema = mongoose.Schema({
  name: String,
  password: String
})

var User = mongoose.model('User', userSchema)


module.exports = User