(function () {
    'use strict';
}());

var server = require('sqlite3').verbose(),
	Sensor = require('../Models/sensor.js');

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
			if (rows.length === 0) {
				database.run("CREATE TABLE Readings(SensorId TEXT, ReadingType INTEGER, Date TEXT,  Value REAL)");
			}
		});
		
		//this.releaseConnection();
    };

    this.saveReading = function(sensorId, readingType, time, value) {
        var database = this.getConnection(this.config);

        database.run("INSERT INTO Readings (SensorId, ReadingType, Date, Value) VALUES ('" +
			sensorId + "', '" + 
			readingType + "', '" + 
			time + "', '" +
			value + "')");
			
		//this.releaseConnection();
    };
	
	this.getSensorsAvailable = function(callback) {
		var database = this.getConnection(this.config);
		
		database.all(
			"select SensorId, ReadingType, Date, Value  from Readings group by SensorId, ReadingType", 
			function(error, rows) { 
			
			var results = [];
			rows.forEach(function(row) { 
				results.push(Sensor.create(row.SensorId, row.ReadingType, row.Value, row.Date));
			});
			
			callback(results);
		});
		
	};

    this.getReadingsForSensor = function(sensorId, sensorType, startTime, endTime) {
	//
    };
};
