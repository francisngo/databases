var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'SELECT * FROM messages';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
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
    post: function (params, callback) {
      var queryStr = 'INSERT INTO users (username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};
