(function () {
    'use strict';
}());

var express = require('express'),
    bodyParser = require('body-parser'),
    sensors = require('./web-services/sensors.js');

var app = express();
//app.use(express.logger('dev'));
app.use(bodyParser.json());

const config = {};

sensors.initialize(config);

app.post('/api/sensors/upload/', sensors.upload);

app.get('/api/sensors/:id', sensors.view);

app.listen(8080);
