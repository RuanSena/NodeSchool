const fs = require('fs');
const path = require('path');

function filterDir(dir, fileExt, cb) {
    filteredFiles = [];
    fileExt = '.' + fileExt;
    fs.readdir(dir, (err, data) => {
        if (err) return cb(err);
        data.forEach(file =>  { if (path.extname(file) === fileExt) filteredFiles.push(file)});
        return cb(null, filteredFiles);
    });
}

module.exports = filterDir;