'use strict';

const DataAccess = require('./adafruitIo.js');

function save(config, reading) {
    const dataAccess = new DataAccess(config);
    dataAccess.save(reading);
}

module.exports = {
    save
};