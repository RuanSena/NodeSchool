const http = require('http')
const port = process.argv[2]
const base = 'http://localhost:'+port
let d = new Date()

const server = http.createServer((req, res) => {
    let url = new URL(req.url, base)
    switch (url.pathname) {
        case '/api/parsetime':
            d = new Date(url.searchParams.get('iso'))
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds()}))
            break;
        case '/api/unixtime':
            d = new Date(url.searchParams.get('iso'))
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({unixtime: d.valueOf()}))
            break;
        default:
            res.writeHead(404)
            res.end()
            break;
    }
})
server.listen(port)