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
  updateOne: function(table, data, cb){
    orm.updateOne(table, data, function(res){
      cb(res);
    });
  },  
  create: function(table, cols, vals, cb) {
    orm.create(table, cols, vals, function(res) {
      cb(res);
    });
  },
};

module.exports = lemonade; 

module.exports.selectUser = function(table, params, callback){
  orm.getUser(table, params, function(res){
    callback(res)
  })
}