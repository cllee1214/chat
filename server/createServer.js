var app = require('./createApp')
var http = require('http')
var server = http.Server(app)

module.exports = server