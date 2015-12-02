(function() {
	'use strict';
}());

var sensorLib = require('bmp085');

module.exports = {

	initialize: function (config) {
		this.config = config;
	},

	read: function(callback) {
		var sensor = new sensorLib();
		var self = this;

		sensor.read(function(sensorData) {
			var data = {
				id: self.config.id,
				readings: [
					{ type: "t", value: sensorData.temperature.toFixed(2) },
					{ type: "p", value: sensorData.pressure.toFixed(2) }
				]
			};

			callback(data);
		});
	}

};
