var mongoose = require("mongoose");

var CreditCardIssuerList = mongoose.Schema({
  issuer:{type:String, required:true, unique:true},
  amount:{type:String},
  cost_period:{type:String},
  holding:{type:String},
  waiting:{type:String},
  comments:{type:String} 

});



var CreditCardIssuerList = mongoose.model("CreditCardIssuerList", CreditCardIssuerList);

module.exports = CreditCardIssuerList;