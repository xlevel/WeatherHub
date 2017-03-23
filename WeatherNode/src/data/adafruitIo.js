'use strict';

const http = require('https');

class AdafruitIo {
    constructor(config) {
        this.config = config.data;  
    }

    saveReading(aio, userId, feedId, value) {
        console.log(`AIO: ${aio} - User Id: ${userId} - Feed Id: ${feedId} - Value: ${value}`);
    
        const reading = {};
        reading.value = value;
    
        const data = JSON.stringify(reading);
        
        const options = {
            hostname: "io.adafruit.com",
            path: `/api/v2/${userId}/feeds/${feedId}/data/`,
            method: 'POST',
            headers: {
                'X-AIO-key': aio,
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };
    
        const request = http.request(options, function(result) {
            console.log('STATUS: ' + result.statusCode);
        });    

        console.log(data);
        request.write(data);
        request.end();
    }

    save(reading) {
        const id = reading.id;
        
        reading.readings.forEach((element) => {
            
            const feed = this.config.config.feeds.find(function(feed) {
                return feed.sensor == id && feed.type == element.type;
            });
            
            this.saveReading(this.config.config.aioKey, this.config.config.user, feed.id, element.value);
        }, this);
                   
    }
}

module.exports = AdafruitIo;