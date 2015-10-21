(function () {
    'use strict';
}());

var http = require('http');

module.exports = {

    initialize: function (config) {
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
    },

    save: function (results) {
        var client = http.createClient(this.config.hub.port, this.config.hub.domain);
        var data = JSON.stringify(results);

        var headers = {
            'Host': this.config.hub.domain,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data, 'utf8')
        };
        var request = client.request('POST', '/api/sensors/upload/', headers);       

        request.write(data);
        request.end();
    }
};
