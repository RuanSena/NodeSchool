const http = require('http')
const req = http.request({hostname: 'localhost', port: 8099, method: 'POST'}, (res) => {res.pipe(process.stdout)})
process.stdin.pipe(req)