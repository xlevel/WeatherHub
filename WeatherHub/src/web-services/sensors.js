(function () {
    'use strict';
}());

var data = require('../data/data.js');

var initialize = function (config) {

};
    
var upload = function (req, res) {
    
    var readings = [];
    req.body.forEach(function (sensor) {
        createReadings(sensor).forEach(function (sensorReading) {
            readings.push(sensorReading);
        });
    });
    
    console.log(readings);
    
    //data.saveReading();
    
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
