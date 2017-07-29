var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      //create a results array/object
      //query our database to get all messages
      //push all messages into results array/object
      //return array/object
    }, // a function which produces all the messages
    post: function (message) {
      //insert message object inside messages table
    } // a function which can be used to insert a message into the database
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
