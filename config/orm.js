var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "Select * FROM " + table + ";";
    connection.query (queryString, function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, lemonade, price, description, url, cb){
    var queryString = "INSERT INTO " + table + " SET ?";

    console.log(queryString);

    connection.query(queryString, [{product_name: lemonade, price: price, description: description, image: url}],
      function(err, result){
        if (err){
          throw err;
        }
        cb(result);
    });
  },
  //   updateOne: function(table, idNum, cb){
  //   var queryString = "UPDATE " + table + " SET ? WHERE ?";

  //   console.log(queryString);

  //   connection.query(queryString, [{devoured: true}, {id: idNum}],
  //     function(err, results){
  //       if (err){
  //         throw err;
  //       }
  //       cb(result);
  //   });
  // }
};

module.exports = orm;