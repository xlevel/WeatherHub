(function () {
    'use strict';
} ());

const DataAccess = require('./adafruitIo.js')

module.exports = {
    save: function (config, reading) {
        
        var dataAccess = new DataAccess(config);
        
        dataAccess.initialize();
        dataAccess.save(reading);
    }
};