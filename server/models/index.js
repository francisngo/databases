var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      //create a results array/object
      //query our database to get all messages
      //push all messages into results array/object
      //return array/object
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'INSERT INTO messages (text, username, roomname) VALUES (?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {
      //create a results array to store all user data
      //query database to get all users
      //push all messages in results array/object
      //return array/object
    },
    post: function (user) {
      //insert user argument/object into user table
    }
  }
};

//40, 15, 42, 12
