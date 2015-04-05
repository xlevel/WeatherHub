(function () {
    'use strict';
}());

module.exports = {
    
    initialize : function (config) {

    },
    
    upload : function (req, res) {
        console.log(req.body);
        res.send("ok");
    },
    
    view : function (req, res) {
        var id = req.parms.id;
        console.log(id);
    }
};
