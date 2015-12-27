(function() {
	'use strict';
}());

var sensorLib = require('node-dht-sensor');

var DHT22Sensor = function(config) {
  this.config = config;
  sensorLib.initialize(22, config.settings.pin);
};

DHT22Sensor.prototype = {
    read: function (callback) {
		var reading = sensorLib.read();

		var data = {
			id: this.config.id,
            readings: [
                { type: "t", value: reading.temperature.toFixed(2) },
                { type: "h", value: reading.humidity.toFixed(2) }
			]
		};

		callback(data);
    }
};

module.exports = {
    create: function(config) {
      return new DHT22Sensor(config);  
    }
};