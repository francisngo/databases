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

var collectData = function(request, callback) {
  var data = '';
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    callback(JSON.parse(data));
  });
};

module.exports = {
  messages: {
    get: function (request, response) {
      //get data from mysql database
      //call models.messages.get() this should return our data
      //call sendResponse, passing in our response, data, and statusCode of 200
      response.end('harambe lives in our hearts');
    }, // a function which handles a get request for all messages
    post: function (request, response) {
      //collect data from the post request by calling collectData().
      //add message to database by calling models.messages.post()
      //send response with status code of 201, data the message, the response
      response.end('you don\'t post harambe, harambe posts you.');
    } // a function which handles posting a message to the database
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
