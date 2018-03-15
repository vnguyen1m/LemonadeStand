var orm = require ("../config/orm.js");
var bcrypt = require('bcryptjs');



module.exports.createUser1 = function(cols, vals, cb) {
    // console.log("users model cols ==>", cols)
    // console.log("users model vals ==>", vals)
  orm.create(userstable, cols, vals, function(res) {
    cb(res);
  });

}

module.exports.findOne = function(email, callback){
  console.log(email);
  orm.getUserCount('user', email, function(err, result){
    console.log("this is the call back from user models selectUser resutl ===> ", result)
    callback(result)
  })
}

// module.exports.getUserByUsername = function(table, username, callback){
//   orm.selectUser(table, username, function(error, result){
//     if(error){
//       console.log("this is users models selectUser funcation erro", error)
//     }
//     return result
//   })
// }


module.exports.getUserById = function(id, callback){
  console.log("models get user email", table, username )
  orm.selectUserById(table, username, function(err, res){
    if(err) throw console.error(err)
    console.log("am the call back ", res)
    callback(res)
  })
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

module.exports.createUser = function(cols, vals, callback){
  orm.create("user", cols ,vals, function(res){
    // console.log("do we have respond", res)
  
    callback(res.ok)
  }) 
}




