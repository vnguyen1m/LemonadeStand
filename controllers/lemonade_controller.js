var express = require("express");
var router = express.Router();

var lemonade = require("../models/lemonade.js");

router.get("/", function (req, res){
  res.render("layouts/login")
  lemonade.selectAll(function(data){
    var lemonadeObject = {
      lemonades:data
    };
    console.log(lemonadeObject);
    //res.json(lemonadeObject)
    
    // res.render("index", lemonadeObject);
    
  });
});

router.get('/users/register', function (req, res){
  res.render("layouts/register")
});

router.post("/order", function (req, res){
  lemonade.insertOne(req.body.email, req.body.product_name, req.body.price, req.body.description, req.body.image, req.body.seller_id, function(){
      res.redirect('/');
  });
});

// router.post("/adduser", function(req, res){
//   lemonade.insertUser(req.body.username, req.body.email, req.body.sell_items, function(){
//     res.redirect('/');
//   });
// });


// router.delete("/delete", function(req, res){
//   console.log(req.body);
//   lemonade.delete(function(){
//     res.redirect('/');
//   })
// })
// router.put("/", function (req, res){
//   console.log(req.body);
//   // console.log("devoured", req.body.devoured);
//   // console.log("id", req.params.id);

//   // burger.updateOne([req.body.devoured], [req.params.id], function(){
//   //   res.redirect('/');
//   });
// });

module.exports = router;