var net = require('net');

var server = net.createServer(function(c) {
    var date = new Date(),
        dateJSON = date.toJSON(),
        dateString;
    dateString = dateJSON.split("T")[0] + " " + date.toTimeString().split(" ")[0].split(":").slice(0,2).join(":");
    c.write(dateString + '\n');
    c.end();
})
server.listen(process.argv[2]);