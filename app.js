var http = require('http');
var express = require('express');
var routes = require('./routes')
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.port || 4000;

var app = express();
app.use(bodyParser());

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/AdarshNodejs', routes.index);
app.get('/AdarshNodejs/about', routes.about);
app.get('/AdarshNodejs/contact', routes.contact);


/*app.get('/AdarshNodejs', function (request, response) {
    response.sendfile("views/HtmlPage.html");
});*/

app.use('/AdarshNodejs', express.static(path.join(__dirname, 'public')));

app.listen(port);