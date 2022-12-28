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
        db.hset(user.username, userObj, (err, res) => {
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
  },

  // Create Update method

  update: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    

    

    // TODO check if user already exists
    db.hgetall(user.username, function(err , res) {
      if (err) return callback(err, null)
      if(res) {
        // i.e. user exists
        // update DB
        db.hset(user.username, [
          'username', user.username,
          'firstname', user.firstname,
          'lastname', user.lastname,
        ], (err, res) => {
          if (err) return callback(err, null)
          callback(null, res) // Return callback
        })
      } else {
        callback( new Error("user doesn t exist"), null )
      }

    })

  },


  
  // Create Delete method
  delete: (username, callback) => {
    // Check parameters
    if(!username)
      return callback(new Error("Please enter a user name"), null)
    // delete user Info
    db.hdel(username, function(err , res) {
      if (err) return callback(err, null)
      if (res)
        callback(null,res)
      else 
        callback(new Error("user doesn t exist"), null )
    })

  }

}
