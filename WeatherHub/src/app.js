(function () {
    'use strict';
}());

var express = require('express'),
    bodyParser = require('body-parser'),
    sensors = require('./web-services/sensors.js');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(express.logger('dev'));
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());

const config = {};

sensors.initialize(config);

app.post('/api/sensors/upload/', sensors.upload);

app.get('/api/sensors/:id', sensors.view);

app.get('/', function (req, res) {
   res.render('index', { title : 'Home', data : [ { name : 'Sensor 1', current: 19, max: 22, min: 17, scale: '°C' }, {name : 'Sensor 2', current: 55, max: 60, min: 54, scale: '%'} ] } ); 
});

app.listen(8080);
