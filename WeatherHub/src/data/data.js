(function () {
    'use strict';
}());

var mysql = require('mysql');

module.exports = {
    initialize: function(config) {
        this.config = config;
    },

    saveReading: function(sensorId, readingTypeType, time, value) {
        var connection = CreateConnection(this.config);

        connection.query('INSERT INTO reading SET ?', 
            {time: time, sensorId: sensorId, readingType: readingType, value: value}, 
            function(err, result) {

            if (err) throw err;

            console.log('Saved reading: '+result.insertId);
        });
    },

    getReadingsForSensor: function(sensorId, sensorType, startTime, endTime) {

    },

    createConnection: function(config) {
        var connection = mysql.createConnection({
            host: config.data.host,
            user: config.data.user,
            password: config.data.password
        });

        connection.connect();

        return connection;
    }
};
