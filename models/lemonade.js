var orm = require ("../config/orm.js");
var burgers = {
  selectAll: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  insertOne: function(cb){
    orm.insertOne("burgers", burger, function(res){
      cb(res);
    });
  },
  updateOne: function(cb){
    orm.updateOne("burgers", idNum, function(res){
      cb(res);
    });
  },
};

module.exports = burgers; 