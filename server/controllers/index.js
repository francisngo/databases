var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

module.exports = {
  messages: {
    get: function (request, response) {
      response.end('harambe lives in our hearts');
    },
    post: function (request, response) {

      var params = [request.body.text, request.body.username, request.body.roomname];

      models.messages.post(params, function(err, results) {
        if (err) { throw err; }
        statusCode = 201;
        // sendResponse(response, results, statusCode);
        response.sendStatus(201);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (request, response) {
      //data = models.users.get();
      //statusCode = 200;
      //call sendResponse, passing in our response, data, and statusCode
    },
    post: function (request, response) {
      //use collectData to collect data from post request
      //add user to database with models.users.post()
      //send response with response, user as data, status code of 201
    }
  }
};
