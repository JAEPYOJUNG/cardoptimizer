var express = require("express");
var router  = express.Router();


// redired to contacts route!
router.get("/", function(req, res){
  res.redirect("/board");
  // res.redirect("/login");
  // res.render("login/kakao_login");
  // res.render("hello");
});


// Home
router.get("/board", function(req, res){
  res.render("board/home/welcome");
});


router.get("/welcome_after_login", function(req, res){
  res.render("board/home/welcome_after_login");
});

router.get("/board/about", function(req, res){
  res.render("board/home/about");
});


router.get("/sample_page", function(req, res){
  res.render("samplejs");
});

router.get("/sample_page1", function(req, res){
  res.render("samplejs1");
});

router.get("/sample_page2", function(req, res){
  res.render("samplejs2");
});


module.exports = router;
