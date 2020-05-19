const http = require('http')
const through = require('through2')
http.createServer((req, res) => {
    if(req.method === 'POST') {
        req.pipe(through((chunk, enc, cb) => {
            cb(null, chunk.toString().toUpperCase())
        })).pipe(res)
    }
}).listen(process.argv[2])