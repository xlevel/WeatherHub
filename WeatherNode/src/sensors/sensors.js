'use strict';

function validateConfig(config) {
    if (config === null || config === undefined) {
        throw new Error("Error: Missing initialization configuration");
    }

    if (config.sensors === undefined) {
        throw new Error("Error: Missing sensor configuration");
    }
}

function read(config, callback) {
    validateConfig(config);

    for (let i = 0; i < config.sensors.length; i++) {
        const sensorConfig = config.sensors[i];
        const SensorType = require(sensorConfig.type);
        const sensor = new SensorType(sensorConfig);

        sensor.read(callback);
    }
}

module.exports = {
    read
};
