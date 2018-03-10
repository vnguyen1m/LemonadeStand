var express = require("express");
var router = express.Router();

var lemonade = require("../models/lemonade.js");

router.get("/", function (req, res){
  lemonade.selectAll(function(data){
    var lemonadeObject = {
      lemonade:data
    };
    console.log(lemonadeObject);
    res.render("index", lemonadeObject);
  });
});

router.post("/", function (req, res){
  lemonade.insertOne(req.body.lemonade_name, function(){
      res.redirect('/');
  });
});

router.put("/", function (req, res){
  // console.log(req.body);
  // console.log("devoured", req.body.devoured);
  // console.log("id", req.params.id);

  // burger.updateOne([req.body.devoured], [req.params.id], function(){
  //   res.redirect('/');
  });
});

module.exports = router;