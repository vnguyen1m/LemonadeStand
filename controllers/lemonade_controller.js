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
  lemonade.insertOne(req.body.email, req.body.product_name, req.body.price, req.body.description, req.body.image, req.body.seller_id, function(){
      res.redirect('/');
  });
});

router.put("/ordered/:id", function (req, res){
  console.log(req.body);
  console.log("sold", req.body.sold);
  console.log("id", req.params.id);

  lemonade.updateOne([req.body.sold], [req.params.id], function(){
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

module.exports = router;