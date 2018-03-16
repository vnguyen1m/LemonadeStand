var orm = require ("../config/orm.js");
var lemonade = {
  selectAll: function(cb){
    orm.selectAll("lemonades", function(res){
      cb(res);
    });
  },
<<<<<<< HEAD
  insertOne: function(product_name, price, description, url, seller_id, cb){
    orm.insertOne("lemonades", product_name, price, description, url, seller_id, function(res){
=======
  insertOne: function(email, product_name, price, description, url, seller_id, cb){
    orm.insertOne("lemonades", email, product_name, price, description, url, seller_id, function(res){
>>>>>>> 6ae5643ec10021f6011ecb40476b72c0c323a983
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