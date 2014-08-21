var fs = require("fs"),
path = process.argv[2], ext = process.argv[3];

var buf = fs.readdir(path, function(err, files){
	files.forEach(function(filename){
		if(filename.split(".")[1] == ext){
			console.log(filename);
		}
	});
	//console.log(files);
});
