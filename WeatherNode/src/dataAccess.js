(function () {
    'use strict';
}());

var http = require('http');

module.exports = {

    initialize: function (config) {
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
