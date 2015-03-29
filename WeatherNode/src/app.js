(function () {
    'use strict';
}());

const sensors = require('./sensors/sensors.js'),
    dataAccess = require('./dataAccess.js'),
    config = require('./config.json');

sensors.initialize(config);
dataAccess.initialize(config);

setInterval(function () {
    sensors.read(function (results) {
        console.log(results);
        dataAccess.save(results);
    });
}, config.interval);



