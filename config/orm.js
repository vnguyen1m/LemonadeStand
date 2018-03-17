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
  insertOne: function(table, email, lemonade, price, description, url, seller_id, cb){
    var queryString = "INSERT INTO " + table + " SET ?";

    console.log(queryString);

    connection.query(queryString, [{email: email, product_name: lemonade, price: price, description: description, image: url, seller_id: seller_id}],
      function(err, result){
        if (err){
          throw err;
        }
        cb(result);
    });
  },
  updateOne: function(table, sold, id, cb){
    var queryString = "UPDATE " + table + " SET ? WHERE ?";

    console.log(queryString);

    connection.query(queryString, [{sold: true}, {id: id}],
      function(err, result){
        if (err){
          throw err;
        }
        cb(result);
    });
  },
  selectOne: function(table, id, cb) {
    var queryString = "Select * FROM " + table + " WHERE ?";
    connection.query(queryString, [{ id: id}], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }


  // insertUser: function(table, username, email, sell_items, buy_items, cb){
  //   var queryString = "INSERT INTO " + table + " SET ?";

  //   console.log(queryString);
    
    
  //   connection.query(queryString, [{username: username, email: email, sell_items: sell_items, buy_items: buy_items}],
  //     function(err, result){
  //       if (err){
  //         throw err;
  //       }
  //       cb(result);
  //     });
  // }

  
  // delete: function(table, lemonade, cb){
  //   var queryString = "DELETE FROM " + table + " WHERE id = ?";

  //   console.log('queryString ', queryString);
  //   console.log("orm ", lemonade);

  //   connection.query(queryString, [lemonade],
  //     function(err, result){
  //       if (err) throw err;
  //       cb(result);
  //     })
  // }
};

module.exports = orm;