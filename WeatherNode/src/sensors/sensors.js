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
        
        for ( var i =0; i < this.config.sensors.length; i++){
            var sensorConfig = this.config.sensors[i];
            var SensorType = require(sensorConfig.type);
            var sensor =  SensorType.create(sensorConfig);
            //sensor.initialize(sensorConfig);

            sensor.read(callback);
        }
    }
};
