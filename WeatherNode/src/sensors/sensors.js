(function () {
    'use strict';
} ());

var validateConfig = function (config) {
    if (config === null || config === undefined) {
        throw new Error("Error: Missing initialization configuration");
    }

    if (config.sensors === undefined) {
        throw new Error("Error: Missing sensor configuration");
    }
};

module.exports = {

    read: function (config, callback) {

        validateConfig(config);

        for (var i = 0; i < config.sensors.length; i++) {
            var sensorConfig = config.sensors[i];
            var SensorType = require(sensorConfig.type);
            var sensor = new SensorType(sensorConfig);

            sensor.read(callback);
        }
    }
};
