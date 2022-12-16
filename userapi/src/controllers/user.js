const db = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    
    // TODO check if user already exists
    db.hgetall(user.username, function(err , res) {
      if (err) return callback(err, null)
      if(!res) {
        // i.e. user doesn t exist
        // Save to DB
        db.hmset(user.username, userObj, (err, res) => {
          if (err) return callback(err, null)
          callback(null, res) // Return callback
        })
      } else {
        callback( new Error("user already exists"), null )
      }

    })
    
    
  },
  // get: (username, callback) => {
  //   // TODO create this method
  // }
  get: (username, callback) => {
    // Check parameters
    if(!username)
      return callback(new Error("Please enter a user name"), null)
    // get User info
    db.hgetall(username, function(err , res) {
      if (err) return callback(err, null)
      if (res)
        callback(null,res)
      else 
        callback(new Error("user doesn t exist"), null ) 

    })
  }
}
