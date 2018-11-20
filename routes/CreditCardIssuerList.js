var express  = require("express");
var router   = express.Router();
var CreditCardIssuerList  = require("../models/CreditCardIssuerList");

// Index
router.get("/", function(req, res){
  CreditCardIssuerList.find({}, function(err, CreditCardIssuerList){
    if(err) return res.json(err);
    res.render("CreditCardIssuerLists/index", {CreditCardIssuerList:CreditCardIssuerList});
  });
});

// New
router.get("/new", function(req, res){
  res.render("CreditCardIssuerLists/new");
});

// show
router.get("/:id", function(req, res){
  CreditCardIssuerList.findOne({_id:req.params.id}, function(err, CreditCardIssuerList){
    if(err) return res.json(err);
    res.render("CreditCardIssuerLists/show", {CreditCardIssuerList:CreditCardIssuerList});
  });
});

// edit
router.get("/:id/edit", function(req, res){
  CreditCardIssuerList.findOne({_id:req.params.id}, function(err, CreditCardIssuerList){
    if(err) return res.json(err);
    res.render("CreditCardIssuerLists/edit", {CreditCardIssuerList:CreditCardIssuerList});
  });
});

// create
router.post("/", function(req, res){
  CreditCardIssuerList.create(req.body, function(err, CreditCardIssuerList){
    if(err) return res.json(err);
    res.redirect("/CreditCardIssuerLists");
  });
});

// update
router.put("/:id", function(req, res){
  console.log("fuck");
  CreditCardIssuerList.findOneAndUpdate({_id:req.params.id}, req.body, function(err, CreditCardIssuerList){
    if(err) return res.json(err);
    res.redirect("/CreditCardIssuerList/"+req.params.id);        
  });
});

// destroy
router.delete("/:id", function(req, res){
  CreditCardIssuerList.remove({_id:req.params.id}, function(err){
    if(err) return res.json(err);
    res.redirect("/CreditCardIssuerLists");
  });
});

module.exports = router;
