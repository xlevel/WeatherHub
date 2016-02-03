(function () {
    'use strict';
}());

var Reading = function(id, readingType, value, time) {
    this.id = id;
    this.readingType = getReadingType(readingType);
    this.value = value;
    this.time = time == undefined ? new Date() : new Date(time);
};

var getReadingType = function (readingType) {
    var value = -1;
    
    switch (readingType) {
        case "t":
            value = 1;
            break;
        case "h":
            value = 2;
            break;
        case "p":
            value = 3;
            break;
    }
    
    return value;
};

Reading.prototype = {};

module.exports = {
    create: function(id, readingType, value, time) {
      return new Reading(id, readingType, value, time);  
    }
};