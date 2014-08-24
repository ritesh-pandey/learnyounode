var http = require('http'),
fs = require('fs');
var server = http.createServer(function(req, res) {
	res.writeHead(200)//, {"Context-type": "text/plain-text"});
	fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));
