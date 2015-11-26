(function() {
	'use strict';
}());

var sensorLib = require('ds18b20');

module.exports = {

	initialize: function (config) {
		this.config = config;
		//sensorLib.initialize(22, config.settings.pin);
	},

	read: function() {
		var reading = sensorLib.temperatureSync('10-00080283a977');	

		return {
			id: this.config.id,
			readings: [
				{ type: "t", value: reading.toFixed(2) }
			]
		};
	}
};
