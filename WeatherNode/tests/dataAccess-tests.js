/*var http = require('http'),
    assert = require('assert'),
    sinon = require('sinon'),
    DataAccess = require('../src/dataAccess.js');

describe('Data Access', function() {
    describe('Initialize', function() {
        
        it('throws an exception if the config is null', function() {
            var dataAccess = new DataAccess();
            assert.throws(
                function() {
                    dataAccess.initialize(null);
                },
                
                function(error) {
                    return (error instanceof Error) && error.message == "Error: Missing initialization configuration";
                }
            )
            
        });
        
        it('throws an exception if the config is undefined', function() {
            var dataAccess = new DataAccess();
            assert.throws(
                function() {
                    dataAccess.initialize(undefined);
                },
                
                function(error) {
                    return (error instanceof Error) && error.message == "Error: Missing initialization configuration";
                }
            )
            
        });
        
        it('throws an exception if the config contains an undefined hub definition', function() {
            var dataAccess = new DataAccess();
            var config = {};
            
            assert.throws(
                function() {
                    dataAccess.initialize(config);
                },
                
                function(error) {
                    return (error instanceof Error) && error.message == "Error: Missing hub configuration";
                }
            )
        });
        
        it('throws an exception if the config contains an undefined hub port value', function() { 
            var dataAccess = new DataAccess();
            var config = { hub: { domain: "localhost" } };
            
             assert.throws(
                function() {
                    dataAccess.initialize(config);
                },
                
                function(error) {
                    return (error instanceof Error) && error.message == "Error: Missing hub port value";
                }
            )
        });
        
        it('throws an exception if the config contains an undefined hub domain value', function() { 
            var dataAccess = new DataAccess();
            var config = { hub: { port: 8080 } };
            
             assert.throws(
                function() {
                    dataAccess.initialize(config);
                },
                
                function(error) {
                    return (error instanceof Error) && error.message == "Error: Missing hub domain value";
                }
            )
        });
        
        it('throws an exception if the config contains an invalid hub port value', function() { 
            var dataAccess = new DataAccess();
            var config = { hub: { domain: "localhost", port: "bob" } };
            
             assert.throws(
                function() {
                    dataAccess.initialize(config);
                },
                
                function(error) {
                    return (error instanceof Error) && error.message == "Error: Invalid hub port value";
                }
            )
        });
        
        it('populates the configuration property with a correctly formatted config object.', function () {
            var dataAccess = new DataAccess();
            var config = { hub: { domain: "localhost", port: 8080 } };
            
            assert.doesNotThrow(
                function () {
                    dataAccess.initialize(config);
                }
            );

            assert.strictEqual(dataAccess.config.hub.domain, config.hub.domain);
            assert.strictEqual(dataAccess.config.hub.port, config.hub.port);
        });
        
    });
    
});*/
