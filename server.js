var http = require('http');
var fs = require('fs');
var static = require('node-static');

var fileServer = new static.Server();

function start(){
   
    http.createServer(function (request, response) {
      request.addListener('end', function(){
          console.log("request recieved");
	  fileServer.serve(request, response);
      }).resume();
    }).listen(8888);
    console.log("Server Has Started.");
}

exports.start = start;
