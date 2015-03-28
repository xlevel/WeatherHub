(function () {
    'use strict';
}());

const sensors = require('./sensors/sensors.js'),
    config = require('./config.json');

sensors.initialize(config);

setInterval(function () {
    sensors.read(function (results) { 
        console.log(results);
        // Send to the data access layer
    });
}, config.interval);



