var express  = require('express');
var router   = express.Router();
var mycardlist     = require('../models/mycardlist');
var mongoose = require('mongoose');

// Index
router.get('/',
  function(req, res, next){
    var query = {};
    if(req.query.name) query.person_name = {$regex:req.query.name, $options:'i'};

    mycardlist.find(query)
    .sort({person_name: 1})
    .exec(function(err, mycardlists){
      if(err) {
        res.status(500);
        res.json({success:false, message:err});
      }
      else {
        res.json({success:true, data:mycardlists});
      }
    });
  }
);


// Index
router.get('/distinctName',
  function(req, res, next){
    var query = {};
    if(req.query.name) query.person_name = {$regex:req.query.name, $options:'i'};

    mycardlist.distinct("person_name",query)
    .exec(function(err, mycardlists){
      if(err) {
        res.status(500);
        res.json({success:false, message:err});
      }
      else {
        res.json({success:true, data:mycardlists});
      }
    });
  }
);

module.exports = router;
