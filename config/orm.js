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
<<<<<<< HEAD
  insertOne: function(table, lemonade, price, description, url, seller_id, cb){
=======
  insertOne: function(table, email, lemonade, price, description, url, seller_id, cb){
>>>>>>> 6ae5643ec10021f6011ecb40476b72c0c323a983
    var queryString = "INSERT INTO " + table + " SET ?";

    console.log(queryString);

<<<<<<< HEAD
    connection.query(queryString, [{product_name: lemonade, price: price, description: description, image: url, seller_id: seller_id}],
=======
    connection.query(queryString, [{email: email, product_name: lemonade, price: price, description: description, image: url, seller_id: seller_id}],
>>>>>>> 6ae5643ec10021f6011ecb40476b72c0c323a983
      function(err, result){
      console.log("result ", result);
      console.log("url ", url);     

        if (err){
          throw err;
        }
        //connection.query()
        cb(result);
    });
<<<<<<< HEAD

  },
=======
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
>>>>>>> 6ae5643ec10021f6011ecb40476b72c0c323a983
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