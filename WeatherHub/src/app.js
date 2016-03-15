(function () {
    'use strict';
}());

var express = require('express'),
    bodyParser = require('body-parser'),
    sensors = require('./web-services/sensors.js'),
    Data = require('./data/data.js');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(express.logger('dev'));
app.use('/static', express.static(__dirname + '/static'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use(bodyParser.json());

const config = {};

sensors.initialize(config);

app.post('/api/sensors/upload/', sensors.upload);

//app.get('/api/sensors/:id', sensors.view);

//Add file path to /assets and /static

app.get('/', function (req, res) {
    var data = new Data();
    data.initialize(config);
    data.getSensorsAvailable(function(results) {
           res.render('index', { title : 'Home', data : results } ); 
    });
});

app.listen(8080);
