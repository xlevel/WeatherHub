(function () {
    'use strict';
}());

var Data = require('../data/data.js'),
    Reading = require('../Models/reading.js');
    
var data = new Data();

var initialize = function (config) {
    data.initialize(config);
};
    
var upload = function (req, res) {
    
    console.log(req.body);
    
    var content = req.body;
    var readings = [];
    
    content.readings.forEach(function (reading) {
        readings.push(Reading.create(content.id, reading.type, reading.value));
    });
    
    readings.forEach(function (sensorReading) {
        console.log(sensorReading);
        data.saveReading(sensorReading.sensorId, sensorReading.readingType, sensorReading.time, sensorReading.value);
    });
    
    res.send("ok");
};
    
// var view = function (req, res) {
//     var id = req.parms.id;
//     console.log(id);
// };

module.exports = {
    initialize : initialize,
    upload : upload//,
    //view : view
};
