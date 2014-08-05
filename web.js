var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = fs.readFileSync('index.html');
var string = buffer.toString();

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
