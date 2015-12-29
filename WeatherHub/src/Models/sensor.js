(function () {
    'use strict';
}());

var Sensor = function(id, readingType, value, time) {
    this.id = id;
    this.readingType = readingType;
    this.scale = getScale(readingType);
    this.value = value;
    this.time = time == undefined ? Date() : time;
};

var getScale = function (readingType) {
    var value = '';
    
    switch (readingType) {
        case 1:
            value = '°C';
            break;
        case 2:
            value = '%';
            break;
        case 3:
            value = 'hPa';
            break;
    }
    
    return value;
};

Sensor.prototype = {};

module.exports = {
    create: function(id, readingType, value, time) {
      return new Sensor(id, readingType, value, time);  
    }
};