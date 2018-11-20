var express  = require("express");
var router   = express.Router();
var mycardlist  = require("../models/mycardlist");
var CreditCardIssuerList  = require("../models/CreditCardIssuerList");

// Index
router.get("/", function(req, res){
  mycardlist.find({}, function(err, mycardlist){
    if(err) return res.json(err);
    res.render("./mycardlists/index", {mycardlists:mycardlist});
  });
});




// New
router.get("/new", function(req, res){
  CreditCardIssuerList.find({}, function(err, CreditCardIssuerList){
    if(err) return res.json(err);
  res.render("./mycardlists/new" , {CreditCardIssuerList:CreditCardIssuerList}
  // , {CardList : res.json(CreditCardIssuerList)}
);
});
});

// create
router.post("/", function(req, res){
  mycardlist.create(req.body, function(err, mycardlist){
    if(err) return res.json(err);
    res.redirect("/mycardlists");
  });
});

// show
router.get("/:id", function(req, res){
  mycardlist.findOne({_id:req.params.id}, function(err, mycardlist){
    if(err) return res.json(err);
    res.render("mycardlists/show", {mycardlist:mycardlist});
  });
});

// edit
router.get("/:id/edit", function(req, res){
  mycardlist.findOne({_id:req.params.id}, function(err, mycardlist){
    if(err) return res.json(err);
    res.render("mycardlists/edit", {mycardlist:mycardlist});
  });
});

// update
router.put("/:id", function(req, res){
  mycardlist.findOneAndUpdate({_id:req.params.id}, req.body, function(err, mycardlist){
    if(err) return res.json(err);
    res.redirect("/mycardlists/"+req.params.id);
  });
});

// destroy
router.delete("/:id", function(req, res){
  mycardlist.remove({_id:req.params.id}, function(err){
    if(err) return res.json(err);
    res.redirect("/mycardlists");
  });
});

module.exports = router;
