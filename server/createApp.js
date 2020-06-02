var express = require('express');
var app = express();
var route = require('./route')
var path = require('path')
var ejs = require('ejs')
var bodyParser = require('body-parser');

app.enabled('etag')

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.set('views', path.join(__dirname, 'view'));
app.engine('html', ejs.__express)
app.set('view engine', 'html')

console.log(path.join(__dirname, 'upload'))

app.use(express.static(path.join(__dirname, 'upload')))
app.use(express.static(path.join(__dirname, 'static')));
app.use('/', route)

module.exports = app