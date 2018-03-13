var express = require("express");
var router = express.Router();

var lemonade = require("../models/lemonade.js");

router.get("/", function (req, res){
  lemonade.selectAll(function(data){
    var lemonadeObject = {
      lemonades:data
    };
    console.log(lemonadeObject);
    //res.json(lemonadeObject)
    res.render("index", lemonadeObject);
    
  });
});

router.post("/order", function (req, res){
  lemonade.insertOne(req.body.product_name, req.body.price, req.body.description,req.body.url, function(){
      res.redirect('/');
  });
});

// router.put("/", function (req, res){
//   console.log(req.body);
//   // console.log("devoured", req.body.devoured);
//   // console.log("id", req.params.id);

//   // burger.updateOne([req.body.devoured], [req.params.id], function(){
//   //   res.redirect('/');
//   });
// });

module.exports = router;