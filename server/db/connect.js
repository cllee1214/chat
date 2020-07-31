const mongoose = require('mongoose')
const dbLoctaion = 'nas'
var url = dbLoctaion ? "mongodb://192.168.1.111:27017/chat" : "mongodb://localhost:27017/chat";

mongoose.connect(url)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('db connected!')
});

module.exports = db