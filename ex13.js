var http = require('http'),
	url = require('url');

var server = http.createServer(function (request, response) {
	var parsedUrl = url.parse(request.url, true),
		pathname = parsedUrl.pathname,
		query = parsedUrl.query,
		date = new Date(query.iso);
	if (pathname === '/api/parsetime') {
		responseJSON = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}
	} else if (pathname === '/api/unixtime') {
		responseJSON = {
			unixtime: date.valueOf()
		}
	}
	response.writeHead(200, {
		'content-type': 'application/json'
	});
	response.write(JSON.stringify(responseJSON));
	response.end();
});

server.listen(Number(process.argv[2]));