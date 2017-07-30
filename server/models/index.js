var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'SELECT * FROM messages';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO messages (text, username, roomname) VALUES (?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  users: {
    get: function (callback) {
      var queryStr = 'SELECT * FROM users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO users (username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};
