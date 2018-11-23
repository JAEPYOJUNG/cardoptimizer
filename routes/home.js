var express = require("express");
var router  = express.Router();


// redired to contacts route!
router.get("/", function(req, res){
  res.redirect("/board");
  // res.redirect("/login");
  // res.render("login/kakao_login");
  // res.render("hello");
});


router.get("/login", function(req, res){
   res.render("login/kakao_login");
  });

// Home
router.get("/board", function(req, res){
  res.render("board/home/welcome");
});

router.get("/board/about", function(req, res){
  res.render("board/home/about");
});




module.exports = router;
