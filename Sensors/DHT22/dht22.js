'use strict';

const sensorLib = require('node-dht-sensor');

class DHT22Sensor{
    constructor(config) {
        this.config = config;
        sensorLib.initialize(22, config.settings.pin);
    }

    read(callback) {
        const reading = sensorLib.read();
        const data = {
            id: this.config.id,
            readings: [
                { type: "t", value: reading.temperature.toFixed(2) },
                { type: "h", value: reading.humidity.toFixed(2) }
            ]
        };

        callback(data);
    }
}

module.exports = DHT22Sensor;