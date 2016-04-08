(function() {
	'use strict';
}());

var sensorLib = require('ds18b20');

var DS18B20Sensor = function(config) {
  this.config = config;  
};

DS18B20Sensor.prototype = {
    read: function (callback) {
		var reading = sensorLib.temperatureSync(this.config.settings.id);
		
        var data = {
            id: this.config.id,
            readings: [
                { type: "t", value: reading.toFixed(2) }
            ]
        };

	callback(data);
    }
};

module.exports = DS18B20Sensor;
