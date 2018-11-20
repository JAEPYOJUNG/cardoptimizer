var express = require("express");
var router  = express.Router();


// redired to contacts route!
router.get("/", function(req, res){
  res.redirect("/board");
});


// Home
router.get("/board", function(req, res){
  res.render("board/home/welcome");
});

router.get("/board/about", function(req, res){
  res.render("board/home/about");
});




module.exports = router;
