var express = require("express");
var router = express.Router();

var lemonade = require("../models/lemonade.js");

router.get("/", function (req, res){
  burgers.selectAll(function(data){
    var burgerObject = {
      burgers:data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/", function (req, res){
  burgers.insertOne(req.body.burger_name, function(){
      res.redirect('/');
  });
});

router.put("/", function (req, res){
  console.log(req.body);
  console.log("devoured", req.body.devoured);
  console.log("id", req.params.id);

  burger.updateOne([req.body.devoured], [req.params.id], function(){
    res.redirect('/');
  });
});

module.exports = router;