(function () {
    'use strict';
}());

var http = require('http');

module.exports = function() {

    this.initialize = function (config) {
        if (config === null || config === undefined) {
            throw new Error("Error: Missing initialization configuration");
        }

        if (config.hub === undefined) { 
            throw new Error("Error: Missing hub configuration");
        }
        
        if (config.hub.port === undefined) {
            throw new Error("Error: Missing hub port value");
        }
        
        if (isNaN(config.hub.port)) {
            throw new Error("Error: Invalid hub port value");
        }
        
        if (config.hub.domain === undefined) {
            throw new Error("Error: Missing hub domain value");
        }
        
        this.config = config;
    };

    this.save = function (results) {
        var data = JSON.stringify(results);
        
        var options = {
            hostname: this.config.hub.domain,
            port: this.config.hub.port,
            path: '/api/sensors/upload/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };
        
        var request = http.request(options, function(result) {
            //Process status code
            console.log('STATUS: ' + result.statusCode);
        });
        
        console.log(data);
        request.write(data);
        request.end();
    };
};
