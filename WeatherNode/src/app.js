(function () {
    'use strict';
}());

const sensors = require('./sensors/sensors.js'),
    DataAccess = require('./dataAccess.js'),
    config = require('./config.json');

var dataAccess = new DataAccess();
sensors.initialize(config);
dataAccess.initialize(config);

setInterval(function () {
    sensors.read(function (result) {
        console.log(result);
        dataAccess.save(result);
    });
}, config.interval);



