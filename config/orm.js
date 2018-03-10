
var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "Select * FROM " + tableInput + ";";
    connection.query (queryString, function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, burger, cb){
    var queryString = "INSERT INTO " + table + " SET ?";

    console.log(queryString);

    connection.query(queryString, [{burger_name: burger, devoured: false}],
      function(err, result){
        if (err){
          throw err;
        }
        cb(result);
    });
  },
    updateOne: function(table, devoured, idNum, cb){
    var queryString = "UPDATE " + table + " SET ? WHERE ?";

    console.log(queryString);

    connection.query(queryString, [{devoured: true}, {id: idNum}],
      function(err, results){
        if (err){
          throw err;
        }
        cb(result);
    });
  }
};

module.exports = orm;