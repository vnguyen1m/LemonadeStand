var orm = require ("../config/orm.js");

var userstable = "user";

module.exports.createUser = function(cols, vals, cb) {
    // console.log("users model cols ==>", cols)
    // console.log("users model vals ==>", vals)
  orm.create(userstable, cols, vals, function(res) {
    cb(res);
  });

}

module.exports.getUserByEmail = function(table, username, callback){
  orm.selectUser(table, username, function(res, error){
    if(error){
      console.log("this is users models selectUser funcation erro", error)
    }
    callback(res)
  })
}


module.exports.getUserByid = function(id, callback){
  console.log("models get user email", table, username )
  orm.selectUserById(table, username, function(res){
    console.log("am the call back ", res)
    callback(res)
  })
}




