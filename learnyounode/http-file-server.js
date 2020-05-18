const http = require('http');
const fs = require('fs');

const PORT = process.argv[2];
const PATH = process.argv[3];

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    fs.createReadStream(PATH).pipe(res);
})

server.listen(PORT);