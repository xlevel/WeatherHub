(function () {
    'use strict';
}());

var server = require('sqlite3').verbose();

module.exports = function()
{
	var database;

    this.getConnection = function(config) {
		if (!database) { database = new server.Database('readings.db'); }
		
        return database;
    };
	
	this.releaseConnection = function() {
		if (database) { database.close(); }	
	};
	
    this.initialize = function(config) {
        this.config = config;

		var database = this.getConnection(config);
	
		database.all("SELECT name FROM sqlite_master WHERE type='table' AND name='Readings'", function(err, rows) {
			if (rows.length == 0) {
				database.run("CREATE TABLE Readings(SensorId TEXT, ReadingType INTEGER, Date TEXT,  Value REAL)");
			}
		});
    };

    this.saveReading = function(sensorId, readingType, time, value) {
        var database = this.getConnection(this.config);

        database.run("INSERT INTO Readings (SensorId, ReadingType, Date, Value) VALUES ('" +
			sensorId + "', '" + 
			readingType + "', '" + 
			time + "', '" +
			value + "')");
    };

    this.getReadingsForSensor = function(sensorId, sensorType, startTime, endTime) {
	//
    }
};
