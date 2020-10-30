var express = require('express');
var app = express();
var path = require('path')
var ejs = require('ejs')
var bodyParser = require('body-parser');

//routes
var indexRoute = require('./routers/index')
var registRoute = require('./routers/regist')
var loginRoute = require('./routers/login')
var friendRoute = require('./routers/friend.js')
var userRoute = require('./routers/user')
var groupRoute = require('./routers/group')

var checkLogin = require('./middleware/checkLogin.js')

app.enabled('etag')

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'view'));
app.engine('html', ejs.__express)
app.set('view engine', 'html')

console.log(path.join(__dirname, 'upload'))

app.use(express.static(path.join(__dirname, 'upload')))
app.use(express.static(path.join(__dirname, 'static')));

app.use(checkLogin)

app.use('/', indexRoute)
app.use('/regist', registRoute)
app.use('/login', loginRoute)
app.use('/friend', friendRoute)
app.use('/user', userRoute)
app.use('/group', groupRoute)
module.exports = app