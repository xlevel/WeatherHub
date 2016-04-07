(function () {
    'use strict';
}());

const sensors = require('./sensors/sensors.js'),
    dataAccess = require('./data/data.js'),
    config = require('./config.json');

//var dataAccess = new DataAccess();
//dataAccess.initialize(config);

setInterval(function () {
    sensors.read(config, function (result) {
        //console.log(result);
        dataAccess.save(config, result);
        //dataAccess.save(result);
    });
}, config.interval);



