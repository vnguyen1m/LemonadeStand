var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');

var lemonade = require("../models/lemonade.js");

router.get("/", function (req, res){
    
  console.log('hello home page')
//   console.log(lemonade);
//   lemonade.selectAll(function(data){
//     var lemonadeObject = {
//       lemonades:data
//     };
    // console.log(lemonadeObject);
    //res.json(lemonadeObject)
    res.render("layouts/index");
    
//   });
});

module.exports = router;
