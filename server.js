var http = require('http');
var fs = require('fs');

function start(){
    function onRequest(request, response) {
	console.log('request recieved');
	var buffer = fs.readFileSync('index.html');
	var string = buffer.toString();
	response.write(string);
	response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server Has Started.");
}

exports.start = start;
