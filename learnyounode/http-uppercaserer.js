const http = require('http')
const fs = require('fs')
const port = process.argv[2]

const server = http.createServer((req, res) => {
    if(req.method !== 'POST') {
        return res.end('Must be via post method.')
    }
    req.on('data', (chunk) => {
        chunk = chunk.toString().toUpperCase()
        res.write(chunk)
    }).on('end', () => {
        res.end()
    })
})

server.listen(port)