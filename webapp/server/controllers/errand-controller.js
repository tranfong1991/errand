var Errand = require('../models/errand');

module.exports.create = function(req, res){
    var errand = new Errand({name:'texas a&m'});

    errand.save(function(err, result){
		res.send(200);
    });
}

module.exports.list = function(req, res){
    Errand.find({}, function(err, result){
		res.send(result);
    });
}