var ex6_1 = require("./ex6_1"),
    dir = process.argv[2],
    ext = process.argv[3];

ex6_1(dir, ext, function(err, files) {
    if (err) {
        console.log(err);
    } else {
        files.forEach(function(file) {
            console.log(file);
        });
    }
});