var assert = require('assert');

describe('Sensors', function () {
    describe('Initialize', function () {
        
        it('throws an exception if the config is null', function () {
            var sensors = require('../src/sensors/sensors.js');
            
            assert.throws(
                function () {
                    sensors.initialize(null);
                },
        
                function (error) {
                    return (error instanceof Error) && error.message == "Error: Missing initialization configuration";
                }
            );
        });

        it('throws an exception if the config is undefined', function () {
            var sensors = require('../src/sensors/sensors.js');
            
            assert.throws(
                function () {
                    sensors.initialize(undefined);
                },
        
                function (error) {
                    return (error instanceof Error) && error.message == "Error: Missing initialization configuration";
                }
            );
        });

        it('throws an exception if the config contains an undefined sensors definition', function () {
            var sensors = require('../src/sensors/sensors.js');
            var config = {};
    
            assert.throws(
                function () {
                    sensors.initialize(config);
                },
        
                function (error) {
                    return (error instanceof Error) && error.message == "Error: Missing sensor configuration";
                }
            );
        });

        it('populates the configuration property with a correctly formatted config object.', function () {
            var sensors = require('../src/sensors/sensors.js');
            var config = { sensors: [] };
            
            assert.doesNotThrow(
                function () {
                    sensors.initialize(config);
                }
            );

            assert.strictEqual(sensors.config.interval, config.interval);
            assert.deepEqual(sensors.config.sensors, config.sensors);
        });
    });

    describe('Read', function () {
        
        it('returns an empty result if no sensor is defined', function (done) { 
            var sensors = require('../src/sensors/sensors.js');
            var config = { sensors: [] };
            
            sensors.initialize(config);
            sensors.read(function (result) {
                
                assert.notStrictEqual(result, null);
                assert.ok(result instanceof Array);
                assert.equal(result.length, 0);
                done();
            });
        });

        it('returns a single result if one sensor is defined', function (done) {
            var sensors = require('../src/sensors/sensors.js');
            var config = { sensors: [{ id: 'sensor 1', type: './mockSensor.js' } ] };
            
            sensors.initialize(config);
            sensors.read(function (result) {
                
                assert.notStrictEqual(result, null);
                assert.ok(result instanceof Array);
                assert.equal(result.length, 1);
                done();
            });
        });
        
        it('returns one result for each sensor defined', function (done) { 
            var sensors = require('../src/sensors/sensors.js');
            var config = { sensors: [{ id: 'sensor 1', type: './mockSensor.js' } , { id: 'sensor 2', type: './mockSensor.js' } ] };
            
            sensors.initialize(config);
            sensors.read(function (result) {
                
                assert.equal(result.length, 2);
                done();
            });
        });
        
        it('the result contains the sensors id', function (done) {
            var sensors = require('../src/sensors/sensors.js');
            var config = { sensors: [ { id: 'sensor 1', type: './mockSensor.js' } ] };
            
            sensors.initialize(config);
            sensors.read(function (result) {
                
                assert.equal(result[0].id, 'sensor 1');
                done();
            });
        });
    });
});




