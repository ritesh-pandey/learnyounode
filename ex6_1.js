var fs = require("fs");
var path = require("path");

module.exports = function(dirName, extension, callback) {
    var filteredFiles = [];
    fs.readdir(dirName, function(err, files) {
        if (err) {
            return callback(err);
        } else {
            files.forEach(function(file) {
                if (path.extname(file) === ("." + extension)) {
                    filteredFiles.push(file);
                }
            });
            return callback(null, filteredFiles);
        }
    });
}