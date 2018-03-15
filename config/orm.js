var connection = require("./connection.js");
// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  selectAll: function (table, cb) {
    var queryString = "Select * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, lemonade, price, description, url, cb) {
    var queryString = "INSERT INTO " + table + " SET ?";

    console.log(queryString);

    connection.query(queryString, [{ product_name: lemonade, price: price, description: description, image: url }],
      function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },
  create: function(table, cols, vals, cb) {
    console.log("orm.js table name \n", table);
    console.log("orm.js table cols \n", cols);
    console.log("orm.js table vals \n", vals);
    
    var queryString = "INSERT INTO " + table;
    console.log(queryString);
    console.log(vals.length)

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },


selectUser: function(table, username, callback){
    // var queryString =  "Select lname FROM " + table +  " WHERE email = ?";
    var queryString = "Select lname from user where email = 'dannymelesse@gmail.com'"
    console.log(queryString)
    connection.query(queryString, function(err, res){
      console.log("am the result ===", res)
     if(err){
        console.log("select user erro ==>", err)
      }
      callback(res)
    });
  },

  selectUserById: function(id, callback){
    var queryString = "SELECT * FROM  users, WHERE id= ?";
    connection.query(queryString, id, function(err, result){
      callback(result);
    })

  }
};

module.exports = orm;