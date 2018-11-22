var express  = require('express');
var router   = express.Router();
var mycardlist     = require('../models/mycardlist');
var mongoose = require('mongoose');

// Index
router.get('/',
  function(req, res, next){
    var query = {};
    if(req.query.name) query.name = {$regex:req.query.name, $options:'i'};

    mycardlist.find(query)
    .sort({id: 1})
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

// Show
router.get('/:id',
  function(req, res, next){
    mycardlist.findOne({id:req.params.id})
    .exec(function(err, mycardlist){
      if(err) {
        res.status(500);
        res.json({success:false, message:err});
      }
      else if(!mycardlist){
        res.json({success:false, message:"mycardlist not found"});
      }
      else {
        res.json({success:true, data:mycardlist});
      }
    });
  }
);

module.exports = router;
