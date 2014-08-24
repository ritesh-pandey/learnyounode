var http = require('http');

var server = http.createServer(function (request, response) {
	response.writeHead(200);
	request.on('data', function (chunk) {
		response.write(chunk.toString().toUpperCase());
	}).on('end', function () {
		response.end();
	})
});

server.listen(Number(process.argv[2]));