'use strict';

const sensors = require('./sensors/sensors.js'),
    dataAccess = require('./data/data.js'),
    config = require('./config.json');

setInterval(function () {
    sensors.read(config, function (result) {
        console.log(result);
        dataAccess.save(config, result);
    });
}, config.interval);



