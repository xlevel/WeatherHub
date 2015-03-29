(function () {
    'use strict';
}());

module.exports = {

    initialize: function (config) {
        if (config === null || config === undefined) {
            throw new Error("Error: Missing initialization configuration");
        }

        if (config.sensors === undefined) { 
            throw new Error("Error: Missing sensor configuration");
        }

        this.config = config;
    },

    read: function (callback) {
        
        var results = [];
        
        for ( var i =0; i < this.config.sensors.length; i++){
            var sensorConfig = this.config.sensors[i];
            var sensor = require(sensorConfig.type);
            sensor.initialize(sensorConfig);

            results.push(sensor.read());
        }

        return callback(results);
    }
};