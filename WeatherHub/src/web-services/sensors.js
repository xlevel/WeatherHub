(function () {
    'use strict';
}());

var Data = require('../data/data.js');
var data = new Data();

var initialize = function (config) {
    data.initialize(config);
};
    
var upload = function (req, res) {
    
    console.log(req.body);
    req.body.forEach(function (sensor) {
        createReadings(sensor).forEach(function (sensorReading) {
            console.log(sensorReading);
            data.saveReading(sensorReading.sensorId, sensorReading.readingType, sensorReading.time, sensorReading.value);
        });
    });
    
    res.send("ok");
};
    
var view = function (req, res) {
    var id = req.parms.id;
    console.log(id);
};
    
var getReadingType = function (readingType) {
    var value = -1;
    
    switch (readingType) {
        case "t":
            value = 1;
            break;
        case "h":
            value = 2;
            break;
        case "p":
            value = 3;
            break;
    }
    
    return value;
};
    
var createReadings = function (data, index) {
    var readings = [];
    
    data.readings.forEach(function (reading) {
        readings.push({
            time: Date(),
            sensorId: data.id,
            readingType: getReadingType(reading.type),
            value: reading.value
        });
    });
    
    return readings;
};

module.exports = {
    initialize : initialize,
    upload : upload,
    view : view
};
