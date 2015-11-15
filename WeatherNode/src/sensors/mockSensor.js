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
            temp: 19.2 ,
            humidity: 45.5 ,
            pressure: 945
        };
    }
};