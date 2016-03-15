(function () {
    'use strict';
}());

var MockSensor = function(config) {
  this.config = config;  
};

MockSensor.prototype = {
    read: function (callback) {
        var data = {
            id: this.config.id,
            readings: [
                { type: "t", value: 19.2 },
                { type: "h", value: 45.5 },
                { type: "p", value: 945 }
            ]
        };

	callback(data);
    }
};

module.exports = MockSensor;