var orm = require ("../config/orm.js");
var lemonade = {
  selectAll: function(cb){
    orm.selectAll("lemonades", function(res){
      cb(res);
    });
  },
  insertOne: function(product_name, price, description, url, seller_id, cb){
    orm.insertOne("lemonades", product_name, price, description, url, seller_id, function(res){
      cb(res);
    });
  },
  // updateOne: function(cb){
  //   orm.updateOne("lemonades", idNum, function(res){
  //     cb(res);
  //   });
  // },
};

module.exports = lemonade;