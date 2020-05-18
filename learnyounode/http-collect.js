const http = require('http');
let output;

http.get(process.argv[2], res => {    
    res.setEncoding('utf8');
    res.on('error', error => console.log(error));
    res.on('data', data => {
        if (output) {
            output += data;
            return;
        }
        output = data;
    });
    res.on('end', () => {
        console.log(output.length);
        console.log(output);
    })
}).on('error', error => console.log(error));
