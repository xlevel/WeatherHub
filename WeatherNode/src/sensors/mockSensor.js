(function () {
    'use strict';
}());

module.exports = {
    
    initialize: function (config) 
    {
        this.config = config;
    },
    
    read: function () {
        return {
            id: this.config.id,
            readings: [
                { type: "t", value: 19.2 },
                { type: "h", value: 45.5 },
                { type: "p", value: 945 }
            ]
        };
    }
};