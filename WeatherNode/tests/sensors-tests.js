var assert = require('assert'),
    sensors = require('../src/sensors/sensors.js');

describe('Sensors', function () {
    describe('Read', function () {
        
        it('throws an exception if the config is null', function () {
            
            assert.throws(
                function () {
                    sensors.read(null, null);
                },
        
                function (error) {
                    return (error instanceof Error) && error.message == "Error: Missing initialization configuration";
                }
            );
        });

        it('throws an exception if the config is undefined', function () {
            
            assert.throws(
                function () {
                    sensors.read(undefined, null);
                },
        
                function (error) {
                    return (error instanceof Error) && error.message == "Error: Missing initialization configuration";
                }
            );
        });

        it('throws an exception if the config contains an undefined sensors definition', function () {
            var config = {};
    
            assert.throws(
                function () {
                    sensors.read(config, null);
                },
        
                function (error) {
                    return (error instanceof Error) && error.message == "Error: Missing sensor configuration";
                }
            );
        });

        it('returns a single result if one sensor is defined', function (done) {
            var config = { sensors: [{ id: 'sensor 1', type: './mockSensor.js' } ] };
            
            sensors.read(config, function (result) {
                
                assert.ok(result instanceof Object);
                assert.equal(result.id, 'sensor 1');
                done();
            });
        });
        
        // it('returns one result for each sensor defined', function (done) { 
        //     var config = { sensors: [{ id: 'sensor 1', type: './mockSensor.js' } , { id: 'sensor 2', type: './mockSensor.js' } ] };
            
        //     sensors.read(config, function (result) {
                
        //         assert.equal(result.length, 2);
        //         done();
        //     });
        // });
        
        // it('the result contains the sensors id', function (done) {
        //     var config = { sensors: [ { id: 'sensor 1', type: './mockSensor.js' } ] };
            
        //     sensors.read(config, function (result) {
                
        //         assert.equal(result[0].id, 'sensor 1');
        //         done();
        //     });
        // });
    });
});




