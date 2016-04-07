(function () {
    'use strict';
}());

var http = require('http');

var AdafruitIo = function(config) {
  this.config = config.data;  
};

var saveReading =  function(aio, feedId, value) {
    console.log("AIO: "+aio);
    console.log("Feed Id: "+feedId);
    console.log("Value: "+value);
    
    var reading = {};
    reading.value = value;
    
    var data = JSON.stringify(reading);
        
    var options = {
        hostname: "io.adafruit.com",
        path: '/api/feeds/'+feedId+'/data/',
        method: 'POST',
        headers: {
            'X-AIO-key': aio,
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

AdafruitIo.prototype = {
    initialize: function() {
        //TODO: Make sure that all required feeds are available
        console.log(this.config);  
    },
    
    save: function (reading) {
        var self = this;
        var id = reading.id;
        
        reading.readings.forEach(function(element) {
            
            var feed = self.config.config.feeds.find(function(feed) {
                return feed.sensor == id && feed.type == element.type;
            });
            
            saveReading(self.config.config.aioKey, feed.id, element.value);
        }, this);
                   
    }
};

module.exports = AdafruitIo;