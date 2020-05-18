const fs = require('fs');
const path = require('path');

const pathToFile = process.argv[2];
const fileExt = '.' + process.argv[3];

fs.readdir(pathToFile, (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (path.extname(file) == fileExt) console.log(file);
    })
});