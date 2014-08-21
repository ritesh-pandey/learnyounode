var fs = require("fs"),
path = process.argv[2];

var buf = fs.readFile(path, function(err, buf){
	var str = buf.toString();
	console.log(str.split("\n").length - 1);
});
