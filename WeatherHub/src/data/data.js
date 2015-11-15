(function () {
    'use strict';
}());

var server = require('sqlite3').verbose();

module.exports = {

    createConnection: function(config) {
	var database = new server.Database('readings.db');
        return database;
    },
	
    initialize: function(config) {
        this.config = config;

	var database = this.createConnection(config);

	database.all("SELECT name FROM sqlite_master WHERE type='table' AND name='Readings'", function(err, rows) {
		if (rows.length == 0) {
			database.run("CREATE TABLE Readings(SensorId TEXT, ReadingType INTEGER, Date TEXT,  Value REAL)");
		}
	});

	database.close();
    },

    saveReading: function(sensorId, readingType, time, value) {
        var database = this.CreateConnection(this.config);

        database.run("INSERT INTO reading SET (SensorId='" +
		sensorId + "', Reading='" + 
		readingType + "', Date = '" + 
		time + "', Value = '" +
		value + "')");

	database.close();
 
    },

    getReadingsForSensor: function(sensorId, sensorType, startTime, endTime) {
	//
    }
};
