const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, txt) => {
    if (err) return console.log(err);
    let nLines = txt.split('\n').length-1;
    console.log(nLines);
});