var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (request, response) {
      models.messages.get(function(err, results) {
        if (err) { throw err; }
        response.json(results);
      });
    },
    post: function (request, response) {
      var params = [request.body.text, request.body.username, request.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { throw err; }
        response.sendStatus(201);
      });
    }
  },

  users: {
    get: function (request, response) {
      models.users.get(function(err, results) {
        if (err) { throw err; }
        response.json(results);
      });
    },
    post: function (request, response) {
      var params = [request.body.username];
      models.users.post(params, function(err, results) {
        if (err) { throw err; }
        response.sendStatus(201);
      });
    }
  }
};
