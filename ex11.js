var http = require('http');

var server = http.createServer(function(req, res) {
	console.log(arguments);
	res.write("Hello World");
	res.close();
});
server.listen(process.argv[1]);
