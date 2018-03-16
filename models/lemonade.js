var orm = require ("../config/orm.js");
var lemonade = {
  selectAll: function(cb){
    orm.selectAll("lemonades", function(res){
      cb(res);
    });
  },
  insertOne: function(email, product_name, price, description, url, seller_id, cb){
    orm.insertOne("lemonades", email, product_name, price, description, url, seller_id, function(res){
      cb(res);
    });
  }
  // insertUser: function(username, email, sell_items, buy_items, cb){
  //   orm.insertUser("users", username, email, sell_items, buy_items, function(res){
  //     cb(res);
  //   });
  // } 

  // delete: function(cb){
  //   orm.delete("lemonades", function(res){
  //     cb(res);
  //   });
  // }
  // updateOne: function(cb){
  //   orm.updateOne("lemonades", idNum, function(res){
  //     cb(res);
  //   });
  // },
};

module.exports = lemonade;