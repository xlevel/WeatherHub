(function () {
    'use strict';
}());

var data = require('../data/data.js');

module.exports = {
    
    initialize : function (config) {

    },
    
    upload : function (req, res) {
        console.log(req.body);

        //split out different readings
        //decide on the reading type
        //data.saveReading();

        res.send("ok");
    },
    
    view : function (req, res) {
        var id = req.parms.id;
        console.log(id);
    }
};
