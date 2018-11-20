var mongoose = require("mongoose");

var mycardlist = mongoose.Schema({
  person_id:{type:String},
  issuer:{type:String},
  received_date:{type:String},
  discard_date:{type:String},
  comments:{type:String}
 

});


var mycardlist = mongoose.model("mycardlist", mycardlist);

module.exports = mycardlist;