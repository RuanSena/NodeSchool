const through = require('through2')
const stream = through((chunk, enc, cb) => {
    cb(null, chunk.toString().toUpperCase())
})
process.stdin.pipe(stream).pipe(process.stdout)