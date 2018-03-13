var orm = require ("../config/orm.js");
var lemonade = {
  selectAll: function(cb){
    orm.selectAll("lemonades", function(res){
      cb(res);
    });
  },
  insertOne: function(cb){
    orm.insertOne("lemonades", lemonade, price, description, url, function(res){
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