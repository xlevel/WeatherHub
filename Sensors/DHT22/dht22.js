(function() {
	'use strict';
}());

var sensorLib = require('node-dht-sensor');

module.exports = {

	initialize: function (config) {
		this.config = config;
		sensorLib.initialize(22, config.settings.pin);
	},

	read: function() {
		var reading = sensorLib.read();

		return {
			id: this.config.id,
            readings: [
                { type: "t", value: reading.temperature.toFixed(2) },
                { type: "h", value: reading.humidity.toFixed(2) }
			]
		};

	}
};
