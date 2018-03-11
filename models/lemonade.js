var orm = require ("../config/orm.js");
var lemonade = {
  selectAll: function(cb){
    orm.selectAll("lemonade", function(res){
      cb(res);
    });
  },
  insertOne: function(cb){
    orm.insertOne("lemonade", lemonade, function(res){
      cb(res);
    });
  },
  updateOne: function(cb){
    orm.updateOne("lemonade", idNum, function(res){
      cb(res);
    });
  },
};

module.exports = lemonade; 